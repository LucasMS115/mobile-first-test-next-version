import styled from "styled-components"

export default function Card({image, alt, text}) {
    return (
        <CardWrapper>
            <figure>
                <img src={image} alt={alt}/>
            </figure>
            <span>Little legenda</span>
            <p>
               {text}
            </p>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 290px;
    margin: 20px 0;
    padding: 30px 0;

    box-shadow: var(--color-secondary) 0px 6px 14px 0px, var(--color-secondary) 0px 0px 0px 1px;

    figure {
        position: relative;
        overflow: hidden;
        width: 250px;
        height: 180px;
        margin-bottom: 10px;
        border-radius: 30px;
    }

    img {
        width: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    p {
        width: 80%;
    }

    @media (min-width:600px) {
        width: 300px;
        margin: 20px;
    }

    @media (min-width:801px) {
        p {
            width: 75%;
        }
    }

    @media (min-width:1021px) {
        width: 320px;
    }

    @media(min-width: 1440px) {
        width: 350px;

        figure {
            width: 300px;
            height: 200px;
        }
    }
`