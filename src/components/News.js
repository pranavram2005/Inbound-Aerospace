import "./styles/news.css";
import Box from "./Box";
import Footer from "./Footer";
const News = () => {
  return (
    <>
      <div className="main_bodys">
        <div className="heads">Latest News</div>
        <div className="container-fluid collection">
          <div className="row">
            <div className="col-sm-12 col-lg-4 box">
              <Box />
            </div>
            <div className="col-sm-12 col-lg-4 box">
              <Box />
            </div>
            <div className="col-sm-12 col-lg-4 box">
              <Box />
            </div>
          </div>
        </div>
        <div className="container-fluid collection">
          <div className="row">
            <div className="col-sm-12 col-lg-4 box">
              <Box />
            </div>
            <div className="col-sm-12 col-lg-4 box">
              <Box />
            </div>
            <div className="col-sm-12 col-lg-4 box">
              <Box />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default News;
