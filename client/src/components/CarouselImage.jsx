import Carousel from 'react-bootstrap/Carousel';
import MermaidCrown from '../components/MermaidCrown';
import JeanJacket from '../components/JeanJacket';
import FlowerCrown from '../components/FlowerCrown';

function CarouselImage() {
  return (
    <Carousel
      style={{
        width: '',
        display: 'flex',
        justifyContent: 'center',
        objectFit: 'cover',
        overflow: 'hidden',
        height: '38vh',
        padding: '2% 2% 0',
        marginBottom: '5%',
        marginTop: '3%',
      }}
    >
      <Carousel.Item interval={4000}>
        <MermaidCrown text="Mermaid Crown" />
        <Carousel.Caption
          style={{ textShadow: '1px 1px 3px #000000', paddingBottom: '11%' }}
        >
          <h3 style={{ color: '#fffb0a' }}>Mermaid Crown</h3>
          <p style={{ color: '#fffb0a' }}>
            Handcrafted crown adorned with shells and pearls.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <JeanJacket text="Jean Jacket" />
        <Carousel.Caption
          style={{ textShadow: '1px 1px 3px #000000', paddingBottom: '11%' }}
        >
          <h3 style={{ color: '#fffb0a' }}>Jean Jacket</h3>
          <p style={{ color: '#fffb0a' }}>
            Upcycled denim beauties ready to wear anywhere.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <FlowerCrown text="Flower Crown" />
        <Carousel.Caption
          style={{ textShadow: '1px 1px 3px #000000', paddingBottom: '11%' }}
        >
          <h3 style={{ color: '#fffb0a' }}>Flower Crown</h3>
          <p style={{ color: '#fffb0a' }}>
            Forever flower crown made with assorted blooms.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImage;
