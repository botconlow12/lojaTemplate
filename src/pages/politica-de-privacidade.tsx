import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Calçados Bibi | Fazer o bem, um passinho por vez</title>
        <meta
          name="description"
          content="Participe do nosso quiz sobre chocolate e ajude a arrecadar dinheiro para doações. 50% do valor gerado será destinado a causas sociais!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start gap-12 ${poppins.className}`}
      >
        <Header />
        <div className="w-[95%] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-brown mb-3">Institucional</h1>
          <h1 className="text-2xl font-bold mb-5">Política de privacidade</h1>
          <p>
            Nós, da Bibi, queremos oferecer a você a melhor experiência de
            consumo possível. Quando você acessa nosso site e nossas lojas, nós
            coletamos os dados pessoais que você compartilha conosco para tornar
            nossos produtos e serviços, além da sua experiência, ainda melhores.
            O objetivo desta Política de Privacidade é fornecer a você uma visão
            de como usamos os dados pessoais que você nos fornece quando visita
            um de nossos ambientes, sejam eles digitais ou físicos, visando
            demonstrar nossa dedicação em protegê-los, garantindo sua
            privacidade, seus direitos e as opções que você tem para controlar
            seus dados pessoais. Esta Política de Privacidade segue as
            regulamentações estabelecidas pela Lei nº. 13.709/18 e demais
            legislações que zelam pela proteção dos dados pessoais. Destacamos
            que todas as informações coletadas e armazenadas pela Bibi, serão
            tratadas com extrema rigidez de segurança e confidencialidade,
            buscando a máxima transparência entre a Bibi e seu consumidor. Para
            fins de interpretação de determinados conceitos utilizados na Lei
            Geral de Proteção de Dados, traz-se nesta Política de Privacidade
            alguns significados pertinentes para sua compreensão: Cliente - toda
            pessoa física que realizar cadastro para aquisição de mercadorias ou
            participação em promoções nas lojas físicas ou pelo site da Bibi;
            Dados pessoais - são quaisquer informações que se refiram o usuário
            e que o identifiquem pessoalmente, seja individualmente ou em
            conjunto com quaisquer outras informações que nos sejam
            disponibilizadas. Além dos dados de identificação fornecidos pelo
            usuário, a Bibi também coletará as seguintes informações quando você
            se registrar em uma conta e opte por fornecê-las: número de
            telefone, gênero, preferências pessoais, rede social (ao escolher
            acessar sua conta por meio de uma mídia social, como o Facebook, ou
            de um provedor, como o Google), idade e/ou data de nascimento. E,
            caso o usuário opte, poderá fornecer informações dos dependentes
            como data de nascimento, nome e gênero. Tratamento de dados - toda
            operação realizada com dados pessoais, como as que se referem a
            coleta, produção, recepção, classificação, utilização, acesso,
            reprodução, transmissão, distribuição, processamento, arquivamento,
            armazenamento, eliminação, avaliação ou controle da informação,
            modificação, comunicação, transferência, difusão ou extração;
            Titular - a quem pertence os dados pessoais objeto de tratamento;
            Finalidade - qual o motivo do tratamento dos dados pessoais
            coletados; Consentimento - manifestação livre, informada e
            inequívoca pela qual o titular concorda com o tratamento de seus
            dados pessoais para uma finalidade determinada. Dados pessoais
            poderão ser coletados: a Bibi coleta as informações prestadas pelo
            usuário no momento do seu cadastro no site, nas lojas e quando
            existir interação com a marca nas diversas plataformas digitais,
            seja em nosso site quando cria uma conta no “Minha conta” e/ou
            quando realiza uma compra numa loja física, bem como em eventual
            caso de troca ou devolução de mercadoria adquirida, mediante
            consentimento verbal, expresso ou eletrônico. Além dos dados de
            identificação fornecidos pelo usuário, a Bibi também coletará as
            seguintes informações quando o usuário se registrar em uma conta e
            opte por fornecê-las: número de telefone, gênero, preferências
            pessoais, rede social (ao escolher acessar sua conta por meio de uma
            mídia social, como o Facebook, ou de um provedor, como o Google),
            idade e/ou data de nascimento. E, caso o usuário opte, poderá
            fornecer informações dos dependentes como data de nascimento, nome e
            gênero. Em determinadas ocasiões, nossa loja virtual poderá
            disponibilizar plug-ins para redes sociais, por exemplo, o usuário
            poderá se cadastrar na nossa loja virtual por meio de contas em
            redes sociais como Facebook, Conta do Google, entre outras, com base
            em suas configurações de privacidade. Caso o usuário não deseje que
            ocorra esse tipo de transferência de dados, orienta-se que sejam
            realizadas as alterações apropriadas no aplicativo ou que saia das
            redes sociais antes de acessar nossa loja virtual. Importante que o
            usuário sempre leia a política de privacidade das redes sociais,
            possibilitando que tome conhecimento de como ocorrerá a coleta e
            compartilhamento de dados pessoais da rede social em específico,
            assim como quais são os seus direitos e de que forma poderá
            configurar as permissões de privacidade. Ainda, poderemos obter
            Informações de loca
          </p>
        </div>
        <Footer />
      </main>
    </>
  )
}
