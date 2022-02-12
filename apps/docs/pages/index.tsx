import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Docs() {
  return (
    <div className="bg-background">
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}
