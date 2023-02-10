import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ReviewMainSectionPage() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: `slick-dots`,
        arrows: false,
    };
    return(
        <Container>
            {/* Carousel */}
            <ContainerCarousel>
                <Slider {...settings}>
                    <div>
                        <DivFlex>
                            <Box>
                                <PicBox src="" />
                                {/* Img Carousel */}
                            </Box>
                            <DivText>
                                {/* Carousel Title */}
                                <SliderTitle>User : 11234xxx21</SliderTitle>
                                {/* Carousel Content */}
                                <SliderContent>
                                    <SliderContent1>“รายละเอียดข้อความแสดงความคิดเห็น”่รายละเอียดข้อความ..........</SliderContent1>
                                </SliderContent>
                            </DivText>
                            <GoldPic />
                        </DivFlex>
                    </div>
                    <div>
                        <DivFlex>
                            <Box>
                                <PicBox src="" />
                                {/* Img Carousel */}
                            </Box>
                            <DivText>
                                {/* Carousel Title */}
                                <SliderTitle>User : 11234xxx21</SliderTitle>
                                {/* Carousel Content */}
                                <SliderContent>
                                    <SliderContent1>“รายละเอียดข้อความแสดงความคิดเห็น”่รายละเอียดข้อความ..........</SliderContent1>
                                </SliderContent>
                            </DivText>
                            <GoldPic />
                        </DivFlex>
                    </div>
                    <div>
                        <DivFlex>
                            <Box>
                                <PicBox src="" />
                                {/* Img Carousel */}
                            </Box>
                            <DivText>
                                {/* Carousel Title */}
                                <SliderTitle>User : 11234xxx21</SliderTitle>
                                {/* Carousel Content */}
                                <SliderContent>
                                    <SliderContent1>“รายละเอียดข้อความแสดงความคิดเห็น”่รายละเอียดข้อความ..........</SliderContent1>
                                </SliderContent>
                            </DivText>
                            <GoldPic />
                        </DivFlex>
                    </div>
                    <div>
                        <DivFlex>
                            <Box>
                                <PicBox src="" />
                                {/* Img Carousel */}
                            </Box>
                            <DivText>
                                {/* Carousel Title */}
                                <SliderTitle>User : 11234xxx21</SliderTitle>
                                {/* Carousel Content */}
                                <SliderContent>
                                    <SliderContent1>“รายละเอียดข้อความแสดงความคิดเห็น”่รายละเอียดข้อความ..........</SliderContent1>
                                </SliderContent>
                            </DivText>
                            <GoldPic />
                        </DivFlex>
                    </div>
                    <div>
                        <DivFlex>
                            <Box>
                                <PicBox src="" />
                                {/* Img Carousel */}
                            </Box>
                            <DivText>
                                {/* Carousel Title */}
                                <SliderTitle>User : 11234xxx21</SliderTitle>
                                {/* Carousel Content */}
                                <SliderContent>
                                    <SliderContent1>“รายละเอียดข้อความแสดงความคิดเห็น”่รายละเอียดข้อความ..........</SliderContent1>
                                </SliderContent>
                            </DivText>
                            <GoldPic />
                        </DivFlex>
                    </div>
                </Slider>
            </ContainerCarousel>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: fit-content;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    
    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`

const DivText = styled.div`
    width: 90%;
    height: auto;

    position: absolute;
    bottom: 10%;
`

const GoldPic = styled.div`
    width: 30px;
    height: 30px;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 10px 0px;
`

const DivFlex = styled.div`
    width: 95%;
    aspect-ratio: 239.81/320;
    max-width: 210px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border-radius: 10px;
    
    gap: 0px;
    margin: auto;

    background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%), #666666;
`

const SliderContent1 = styled.p`
    font-family: 'Sukhumvit Set';
    font-weight: 400;
    font-size: 12px;
    text-align: start;
    color: #fff;

`

const SliderContent = styled.div`
    width: 90%;
    height: auto;
`

const SliderTitle = styled.h3`
    width: 100%;
    height: auto;

    font-family: 'Sukhumvit Set';
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    text-align: start;
    color: white;
`

const Box = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`

const ContainerCarousel = styled.div`
    width: 95%;
    height: auto;

    @media (min-width: 1280px) {
        width: 91%;
        
        max-width: 1164.44px;
    }
    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`
