import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function Carousel () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return(
        <Container>
            <Slider {...settings}>
                <div>
                    <Box>
                        
                    </Box>
                </div>
                <div>
                    <Box>
                        
                    </Box>
                </div>
                <div>
                    <Box>
                        
                    </Box>
                </div>
                <div>
                    <Box>
                        
                    </Box>
                </div>
                <div>
                    <Box>
                        
                    </Box>
                </div>
                <div>
                    <Box>
                        
                    </Box>
                </div>
            </Slider>
        </Container>
    )
}

const Box = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 300px;
    background-color: rgba(255,255,255,1);
`

const Container = styled.div`
    width: 100%;
    padding: 30px 0;
`
