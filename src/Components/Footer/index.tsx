import { Layout } from 'antd';
import '../../css/footer.css';

export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer
      style={{
        textAlign: 'center',
        justifyContent: 'space-around',
        background: '#4987fd',
      }}
    >
      <p className="FooterTitle">
        Copyright ©2024 GRN - Tous droits réservés{' '}
      </p>
    </Footer>
  );
}
