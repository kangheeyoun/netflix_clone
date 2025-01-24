import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const movies = [
    {id:1, title:"첫번째", image:"./images/1.jpg", tag:"최신등록"},
    {id:2, title:"두번째", image:"./images/2.jpg", tag:"최신등록"},
    {id:3, title:"세번째", image:"./images/3.jpg", tag:"최신등록"},
    {id:4, title:"네번째", image:"./images/4.jpg", tag:"최신등록"},
    {id:5, title:"다섯번째", image:"./images/5.jpg", tag:"최신등록"},
    {id:6, title:"여섯번째", image:"./images/6.jpg", tag:"최신등록"},
    {id:7, title:"일곱번째", image:"./images/7.jpg", tag:"최신등록"},
    {id:8, title:"여덟번째", image:"./images/8.jpg", tag:"최신등록"},
    {id:9, title:"아홉번째", image:"./images/9.jpg", tag:"최신등록"},
    {id:10, title:"열번째", image:"./images/10.jpg", tag:"최신등록"}
];

 const MoveSlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
      function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="slick_next"
            onClick={onClick}
          >▶</div>
        );
      }
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="slick_prev"
            onClick={onClick}
          >◀</div>
        );
      }

    return (
        <div className="move-slider">
            <h2>지금 뜨는 콘텐츠</h2>
            <Slider {...settings}>
                {
                    movies.map((list)=>{
                        return<div className="movie-card" key={list.id}>
                            <span>{list.id}</span>
                            <img src={list.image} alt={list.title} />
                        </div>
                    })
                }
            </Slider>
        </div>
    );
 };
 
 export default MoveSlider;