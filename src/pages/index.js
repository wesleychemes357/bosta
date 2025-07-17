import { Container, Row } from "react-bootstrap";
import Cards from "./components/cards";
export async function getServerSideProps() {
  // Fetch data from  API notícias
  const res = await fetch('https://portalinfob.vercel.app/api/noticias/apinoticias')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { noticias: repo } }
}
export default function Home({ noticias }) {
  return <>
    <Container>
      <h1 className="text-center bg-dark text-white">pag PRINCIPAL INDEX MAIN PRINCIPAL top topzera demais top </h1>
      <Row xs={1} md={3}>
        Main index
        {Array.isArray(noticias) ?
          noticias.map(noticia => (
            <Cards idnoticia={noticia.idnoticia}
              conteudonoticia={noticia.conteudonoticia}
              titulonoticia={noticia.titulonoticia}
              datahoracadastro={noticia.datahoracadastro}
              tiponoticia={noticia.tiponoticia} />
          ))
          : "não"}
      </Row>
    </Container>
  </>
}
