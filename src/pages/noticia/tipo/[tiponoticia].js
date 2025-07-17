import { Container, Row } from "react-bootstrap";
import Cards from "../../components/cards";
export async function getServerSideProps(req) {
  // Fetch data from  API notícias
  const res = await fetch('https://portalinfob.vercel.app/api/noticias/tipo/' + req.query.tiponoticia)
  const repo = await res.json()
  // Pass data to the page via props ola
  return { props: { noticias: repo } }
}
export default function Page({ noticias }) {
  return <>
    <Container>
      <Row xs={1} md={3}> 
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