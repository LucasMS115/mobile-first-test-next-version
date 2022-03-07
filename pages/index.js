import styled from 'styled-components'
import Card from '../src/components/Card'

export default function Home() {

  return (
    <>
      <CardsSection>

        <h2>These are my responsive cards</h2>

        <CardsContainer>
          <Card
            image="https://media3.giphy.com/media/xuXzcHMkuwvf2/giphy.gif?cid=ecf05e47eaoi1p0mk6egs9912h8z2174fagxycam73xakj72&rid=giphy.gif&ct=g"
            alt="Pikachu happy"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />

          <Card
            image="https://media2.giphy.com/media/U2nN0ridM4lXy/giphy.gif?cid=ecf05e47eaoi1p0mk6egs9912h8z2174fagxycam73xakj72&rid=giphy.gif&ct=g"
            alt="Pikachu crazy"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />

          <Card
            image="https://media2.giphy.com/media/pq2pU6B2Ht3pu/giphy.gif?cid=ecf05e470wpr934m2oqfxfsbnmdmxfgtd4n1po8jsv7d2n4r&rid=giphy.gif&ct=g"
            alt="Pikachu saying no"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          />
        </CardsContainer>

      </CardsSection>
    </>
  )
}

const CardsSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    padding: 10px;
    margin: 10px 0;
    overflow: hidden;

`

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
`