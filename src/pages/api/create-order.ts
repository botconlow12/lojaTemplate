/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const API_URL = 'https://api.vegacheckout.com.br/v1/orders' // Substitua com a URL da API da Vega Checkout
const API_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNSIsImp0aSI6IjFkNWIzMDU0MTQzN2Q5YmQ4ZjEzMjUyN2M1NzY1NjEyMmFiZmJlMWI4MDA4MGEwMGM4MTVkNmE4ZDA5MzE5ZTg1OGQ2NDJkOWYwZTcyY2ZmIiwiaWF0IjoxNzIyODIxNTAxLjE2NzQwMywibmJmIjoxNzIyODIxNTAxLjE2NzQwNSwiZXhwIjoyNjY5NTA2MzAxLjE2Mzk5NSwic3ViIjoiMzA3NzkiLCJzY29wZXMiOlsic2FsZSIsInByb2R1Y3QiXX0.bMbFkuqn3R6fMSJFn_pGvd9ZkUHD3UP5IrWtUgWsymw_3ZU_Ns4qPlJfMIHDGLXozA7kpz1aCscWhu4599ROMXUqA9Ni1nJzL4A1mgkPH5YUa1-Tkz6vw0ZbuQ2fNABlCdgqixB8-mr5i0Nc0Grp5UZxhIfms9qAG7Q7O-5eEESih2WpVsvcDhcn-8YskbA5wb34oWTpILqJxpV9F8C51TY63gU53rMgTEZKKz55jvwH6tHT3dwMr1UevG10U5Z31Fx7XGqIsMmV6raaTAdfjrEJRu7LTlDc7BTsNW-we7DDwRkni51bQV61ZZ_OnOK0mL-QNWebIHu3nlEtriO01WvRzTy1Kq3KTBZfgJOlc3mLBaoLqDAvTLB97xwgFMlO7qWvlcyJG2h1PdZJ89mrLfzCEnAcM9wnh1Duohv5K7NAvyK0_ALQeGXQlYeFBGeFx26ngd269Hs--ezuGjd24vE5jYZXs_xaWE_dfbYy0uHuMxxfqeCdENiORBIHqTgukna8u7DAdoM5GEHms-TmSeWbzhQ_D25GgNhqOpN8v6AuvB16RbEwhNAhiNedsdueDqlgmepbcfMhV3HEoUT4d521tZ1EhwLyy1SY7YmJU83Hm3bZ9AcBUJPUzh8O95FQQjQKlpr5wGBpmsqP2VQQv8Q2pnshBXY5a0-0aRHYt0c' // Substitua com seu token da Vega Checkout

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { items, total } = req.body

    // Prepare o payload com os dados do pedido
    const orderPayload = {
      items: items.map((item: any) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      total,
      currency: 'BRL',
    }

    // Faça a requisição para criar o pedido
    const response = await axios.post(API_URL, orderPayload, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    // Retorne a URL de checkout para o frontend
    res.status(200).json({ checkoutUrl: response.data.checkout_url })
  } catch (error) {
    console.error('Error creating order:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
