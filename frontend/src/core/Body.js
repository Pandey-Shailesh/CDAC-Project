import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { getProducts } from "./helper/coreapicalls";
import Card from "./Card";

const Body = ({
  title = "Learn And Grow",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="jumbotron bg-light text-black text-center row">
          <div className="col ">
            <h3 className="heading-line d-inline-flex p-2">&nbsp;</h3>
            <h5 className="guarantee">
              <b>100% Satisfaction Guarantee</b>
            </h5>

            <h2 className="heading-line d-inline-flex p-2">
              Explore Your Learning Area
            </h2>
            <h2 className="heading-line d-inline-flex p-2">
              And Gather Knowledge
            </h2>
            <p className="lead ">
              Ignite your learning journey with our exceptional tutors, ready to
              unleash your full potential . Get personalized instruction and
              master new skills efficiently with our top-rated cources.
            </p>
          </div>
          <div className="col">
            <img
              className=" banner"
              src="https://miro.medium.com/v2/resize:fit:679/1*zVnWJtyGOX_kUIDm6ccCfQ.gif"
              alt="banner"
            />
          </div>
        </div>
        <div className="pt-4 pb-4 instructors container-fluid">
          <div className="row">
            <div className="col">
              <h1>150+</h1>
            </div>
            <div className="col">
              <h1>8500+</h1>
            </div>
            <div className="col">
              <h1>350+</h1>
            </div>
            <div className="col">
              <h1>600+</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Instructors</h4>
            </div>
            <div className="col">
              <h4>Success Stories</h4>
            </div>
            <div className="col">
              <h4>Cources & Subjects</h4>
            </div>
            <div className="col">
              <h4>Hours Tutor</h4>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 300">
          <path
            fill="#7952b3"
            fill-opacity="1"
            d="M0,96L21.8,122.7C43.6,149,87,203,131,234.7C174.5,267,218,277,262,240C305.5,203,349,117,393,117.3C436.4,117,480,203,524,224C567.3,245,611,203,655,208C698.2,213,742,267,785,256C829.1,245,873,171,916,144C960,117,1004,139,1047,138.7C1090.9,139,1135,117,1178,138.7C1221.8,160,1265,224,1309,245.3C1352.7,267,1396,245,1418,234.7L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
        <div className="jumbotron  text-black text-center row">
          <div className="col">
            <div className="row cards">
              <div className="col card cards-item">
                <img
                  src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-cute-ice-cream-purple-kawaii-icon-png-image_7261315.png"
                  className="card-img-top"
                  alt="Expert Instruction"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Expert Instruction</b>
                  </h5>
                  <p className="card-text">
                    Hold the Oppertunity to learn from the industry's experts.
                  </p>
                </div>
              </div>
              <div className="col card cards-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3557/3557908.png"
                  className="card-img-top"
                  alt="Scholarship"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Scholarship</b>
                  </h5>
                  <p className="card-text">
                    Get free scholarship for every level of eduction.
                  </p>
                </div>
              </div>
              <div className="col card cards-item">
                <img
                  src="https://images.vexels.com/media/users/3/185277/isolated/preview/d934f4bdb2e758354ab765b52113587e-purple-flower-thin-petals-flat.png"
                  className="card-img-top"
                  alt="Schedule Learning"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Schedule Learning</b>
                  </h5>
                  <p className="card-text">
                    Any time, any where learn on your schedule from any Device.
                  </p>
                </div>
              </div>
            </div>
            <div className="row cards">
              <div className="col card cards-item">
                <img
                  src="https://clipart-library.com/img/1453589.png"
                  className="card-img-top"
                  alt=">Recorded Session"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Recorded Session</b>
                  </h5>
                  <p className="card-text">
                    Recording Session makes your journey easier.
                  </p>
                </div>
              </div>
              <div className="col card cards-item">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/symbols-8/50/1F49C-purple-heart-512.png"
                  className="card-img-top"
                  alt="Practical Learning"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Practical Learning</b>
                  </h5>
                  <p className="card-text">
                    Practical Workshops and Courses to enhance your Skills.
                  </p>
                </div>
              </div>
              <div className="col card cards-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/867/867891.png"
                  className="card-img-top"
                  alt="Course Accessibility"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Course Accessibility</b>
                  </h5>
                  <p className="card-text">Courses are Accessible 24/7 hrs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col e-learning justify-content-end">
            <h2 className="heading-line ">&nbsp;</h2>
            <h2 className="heading-line ">Why Choose</h2>
            <h2 className="heading-line ">E-Learning ?</h2>

            <p className="lead">
              <b>
                E-Learning meets the needs of <br />
                generations that have come to expect
                <br />
                answers on demand and just in time.
              </b>
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center jumbotron testimonials ">
          <h5 className="guarantee">
            <b>Our Testimonials</b>
          </h5>
          <h2 className="heading-line  ">See What Our Lovely</h2>
          <h2 className="heading-line  ">Student Say About Us</h2>
          <h2 className="heading-line  ">&nbsp;</h2>
          <div className="row testimonials-cards ">
            <div className="col card testimonials-cards-item ">
              <img
                src="https://as1.ftcdn.net/v2/jpg/05/71/35/08/1000_F_571350807_CpzPdIH64mtVOJ935wPI0wjdr45VQmKo.jpg"
                className="card-img-top  "
                alt="testimage"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b> Vaibhav Pandey</b>
                  <br />
                  <b> CEO Of MakeWorldHappy </b>
                </h5>
                <p className="card-text">
                  " Like this vide and ask your questions in comment section,
                  don't forget to Subscribe Easy Tutorials YouTube channel to
                  watch more videos of website designing."
                </p>
              </div>
            </div>
            <div className="col card testimonials-cards-item">
              <img
                src="https://img.freepik.com/premium-photo/girl-with-colorful-hair-wearing-headphones-hoodie-with-words-name-it_961307-744.jpg?w=360"
                className="card-img-top "
                alt="testimage"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b> Khushi Matte</b>
                  <br />
                  <b> Developer at Google</b>
                </h5>
                <p className="card-text">
                  " Like this vide and ask your questions in comment section,
                  don't forget to Subscribe Easy Tutorials YouTube channel to
                  watch more videos of website designing."
                </p>
              </div>
            </div>
            <div className="col card testimonials-cards-item">
              <img
                src="https://t3.ftcdn.net/jpg/05/81/92/68/240_F_581926884_PrOyvSHzp7bEpGu0S50qAZUdHPzkig00.jpg"
                className="card-img-top"
                alt="testimage"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Vinay Sonkar</b>
                  <br />
                  <b>CEO Of Onclick Company</b>
                </h5>
                <p className="card-text">
                  " Like this vide and ask your questions in comment section,
                  don't forget to Subscribe Easy Tutorials YouTube channel to
                  watch more videos of website designing."
                </p>
              </div>
            </div>
            <div className="col card testimonials-cards-item">
              <img
                src="https://t3.ftcdn.net/jpg/05/81/92/68/240_F_581926891_ShSQMT2TDjihiKHp2RUnJNlD12XCfH84.jpg"
                className="card-img-top"
                alt="testimage"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b> Abhishek Sonone</b>
                  <br />
                  <b> Manager At Microsoft</b>
                </h5>
                <p className="card-text">
                  " Like this vide and ask your questions in comment section,
                  don't forget to Subscribe Easy Tutorials YouTube channel to
                  watch more videos of website designing."
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="row jumbotron text-center aboutus">
            <div className="col">
              <h5 className="guarantee">
                <h2 className="heading-line  ">&nbsp;</h2>
                <b>About Us</b>
              </h5>
              <h2 className="heading-line  ">Expert Tutors for Superior</h2>
              <h2 className="heading-line  ">Skill Development</h2>
              <p className="lead">
                <b>
                  In a world ruled by algorithms, we bring timely, relevant
                  information for SEOs, marketers, and entrepreneurs to optimize
                  and grow their businesses — and careers.
                  <br /> We are SEO professionals, content writers, and
                  marketers, just like you. As the leading resource for search
                  news and best practices, we’ve grown from a personal blog in
                  2003 to over 1.5M+ monthly visitors today.
                  <br /> And you are why we come to work each day. We aim to
                  educate and empower our readers to have confidence in their
                  job and campaign planning, and getting to the next level of
                  your career.
                </b>
              </p>
            </div>
            <div className="col">
              <img
                className=" about"
                src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif"
                alt="banner"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="categories jumbotron">
          <div>
            <h1 className=" heading-line text-center">
              Find Online Your Course in
            </h1>
            <h1 className=" heading-line text-center">Any Category</h1>
            <h1 className=" heading-line text-center">&nbsp;</h1>
            <div className="row ">
              {products.map((product, index) => {
                return (
                  <div key={index} className="col-3 mb-4 ">
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className=" trusted-by jumbotron">
          <h3 className="heading-line ">&nbsp;</h3>
          <h2 className="heading-line ">We Are Trusted By</h2>

          <p className="lead ">
            Many big brands and Companies support our goal to be the best <br />
            and trusted in personal and career development.
          </p>
          <div className="trusted-icons row">
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,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"
                  className="figure-img img-fluid rounded"
                  alt="google"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,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"
                  className="figure-img img-fluid rounded"
                  alt="Yahoo"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,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"
                  className="figure-img img-fluid rounded"
                  alt="facebook"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,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"
                  className="figure-img img-fluid rounded"
                  alt="microsof"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,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"
                  className="figure-img img-fluid rounded"
                  alt="amazon"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABSCAMAAAC/vFqhAAAA6lBMVEX///8AAEEAADwAAD8AADkAAD0AADYAAC8AADMAADoAADX9/f8AADLLy9RJSWdOTndubocAACtSUnB5eZTh4eqjo7j29vl+fpYAACjFxdHr6+8NDU6srL0AAEO8vMTz8/c8PGAsLFoAAEbV1d/b2+MAACa+vsyKiqGamq4cHE62tsRoaIdOTnBISG0XF0w3N2KOjqEqKlVgYIEjI1E0NF8kJFkSEkwzM113d4w9PWhXV3sAACEJCU1kZH4AAE1zc5I8PGsAABhERHEbG1UAAAh/f51+fpATE1IzM2aSkq2trbmyssVcXHecnKmCbn4lAAAeEklEQVR4nO2di3ebOLPAAYFAGDd2jXEgdhwbxyZ+JXESp/E2Tbe5/fpI+///O1fiKYF42cnu/e7pnLNnTx0QQvoxGo1GI0GoLA2zeeo9HX2/24pEtnefd53fdtOsXkAkVvSL05zPdp+fSWnPnxdXp65VdP8e0jw9tW3yn/PKBf+DMnEDqd7Q/0UynHQ3ZxdAg7IEgBgIAEjWNfHibONN/H4bdh/P3hXIWSD3j/2gyNnyGpcoheUBBLWT+800QGDYeJV6f2lrvqDr3vBVCvwXZDk4ITK4eW//21V5bZn3Lg0NKRFRrAAFacboQ58om+F81TaQ5IvCFag+T0kXT3oPhi6lSwSKrK47E/L3r7OXV9AyRygqWbv/byXrHQKBoHb3367La4rdkVRZ4TJFESEb6pc5IcHsjTU+gViU9nKKr7H6349hXpFAbq/IRfPb//nUmx5IQwyWKMLd6yjBf1zeSfE7HP+/IQurIAVm9ApWUliklApD8PqJ2AHObCvzmYH3fdy5jncNJf4FUUnyzsX4dYEhXy+ah9hdFFii0XytVvlnhQIL3PwX24q0zM80xHS5AqGMxOfvR0e7oy/fTxQkQznBC0DQwkQIk4XGIUdSe7hZGt11vkaLRRZ7uJzmLcSqcNndX9XQYMHOq7XLPyoUWKI+/7dr8xoyvWzTfABsS13+p09PsBqT+e/WJ1VPLpPPN0QxNEdamhXjkvyh/6yWY0UeZozw5dZCxUAaYn9frUWDhXav0Cb/gtBgwd6/XZvDxXySGaz08S/P4XWwNZm9A8l4KYsLjJ41Yy1zoM2wuTTZ5ZpWGUEDDxfeI6MqgPd7fqkMWO8PaY5/T2iw5P8rWrfh0FLnu58yOgfAdW/i/2653VnvQ+vxsfWh9+NlEoxSVvMJJEMivCA25hTQnbolLgbvJMf44gpQr3DpM78airHYy7qgwZL+gPV60rwbJXJX3XptzM4p1QK0cTAYTa8+G20NyjIx3mWoG23w5Wrq/8nxBnrs4TJW2Io3H2I04QibXuZRtVEwkXaLkKUGRYz3mRH9AeuNxAYKiERBlR1szlKn+hcNyDAmmLMbpCOgKBIpM+4uiC52TfJ3q5coJHmMNdSwpYb/WmH2+utidUVqKJGiqd/gBpe7C+4DWqe+7+EPWG8kNtN1VcFyRjQD8ogMgsPZiaHBwfr6/vLh9v76QpT0aPADMlx5RG25y0RpoSf8Q0cO8BgKDa9oLgiQrmxvri8fHm6vLwCCMQ5qryEMz8J/ar9qD4d/wHoj2QusyQ3FFWj3iB3VPzk/fu7N45VBx53+XIzbkS0uGSc+Wp4U96SxwhhctTEci3B6l0eV3BY3P6ehuSYM3fnvnayG1KpXmFcxZBKu666X/QHrjWQfsNwbqjcUmczHhou/LmecTnVn95HHCsAx8ZdPLmHcCMSw6qpkOHPucodBoK1bdsZR1Zh+WGs+tAiPqf12eDG6cOu9/x+w3kj2AGt4QXO1JrSYq3Xe2oozX0XrPYq8wOwNVzFDaIsxuNo0hMltHldAvvBytJDj3RMfBlCw4nuIqoTuJ7Xe/w9YbyT1wbJW9Djo3+I894t83/1nI7wcDvDljU6kX0Rp7D/RvMjjSkZegUHe6I7xvFLeNQR3EBlo8l0tX+kfsN5I6oP1RLmvgL+8Zn4t6cvGlR4qLaDOMIJeTJZCSDPzVgaBvCiZ51kzPB6qXUHoJZ6LWmvJf8B6I6kNVp9eG5SIV7Phlvfk9DrSSTIe+QJ3eUiWKVjf2fXGSAKnaVnJ9zK4MQXzYzyn1Gbld8XyB6w3klpgOY7g0KEMRvW3MGOb3SAapRPPAdEIF3rHIwt+qzTFM1caWT3uxXMCoNiCVdXS+gPWG0llsMxm7+ROaGwoawit6pgzq6jn9Qc8vm1iB6v8YAnmNuvDMjZVS9/Ac0cYxsMrNvwawkzpTKtw+QesN5JKYA0n3u4aaQNXmNMOd6PWBGy4i8hCKzx+3sWtIS8EYZ7xYmmt6m70TruH8UqQJ4PhsyZf7zyzrJA/YL2RVADL7Y10DQFR7wjWGR2hUfMdnMhB7g+hbqKkjueCsIAiI3BVo+TGBjmCTYV9AVOYIxLGA1e9Ymf8H7DeSMrBmhqB9xxsh0KXUlhgVHf9xBGjdev2FVZS8TwOKK4wvGRmhnKtUVYQRlhHraigr40g7HxkJB0Wrqz/AeuNpBysL2G1dQzDR8oU0rzaD5uK8UohVlKdWEmhpSXYtCsLXNRcmpngEmYJ9QCP2k0tgSxfaoA1dMxJ057armk6+4SsNoL7mxPTqTzKW/getzm1C296HbDwo8xDXi8l5WANIi0zFKZt6tr1HvFPs8hTCsShYCVxChBD+0QNhu1p3ZL7tjChHGzwSbCWQXsr74qaqSpYpvdh+SypRNra+PZxNq3Z+M2rx5GI7zZUFZ6sPnQrsGV2/7O8Gxht/6no2/KDx2/yVwDL6s9+3YXVM8aXj17NlbFIJt0fs//4TiIWLN6oEdV4QUyZ5FqiwGpLYxWVQPTIPCnu2BSGCRfwqXbJli0MqbFQPLaEfkCxclbUh5XAcq8+tTU5iXgFCoKqvslhy+70IpmFj3a8b20dJfdLsqEeFft23Kvnc01GgL5JOx7x2KoAltdjpMM4CIf9lWpARL+e3v7UjZ40oe6Lfusnv8VRcM7PI9g2dNj2e48BS9ywj/exjZ5mCybtbWrvte/WjWd/Gn63RRKetWgIXqSylNrWGxYS8UfpPK0rWGoIVpG5Vg5Ww14NMvuQ/Dqj+y6v6O6xHIoeBFtY3TWnAIRW+Xq5ueM/U9HXvUzDl4PlqVBOBB5vqAY2ZzeQ40YE8OIqeLtpcvNf4bMbj2r0k7EMfnKeLsJiZA5YSKbl/JRcEb4R/u49aqxRvuc2SqE80fRMku9RwxrnPrTt1QoOd568GEn90GND+CwFNT8ILHfDa/bwHVQeG91kVkIW2QXzl8GPNENaj1+14ULMD/aAJ+nmKQXLY6fcxHMYSaO71XPi4IC68jXLadLtkTZptOL6Se/8X/oXcTE8sFgxKLDI1fRQo/0s6K0CcS6i5+u4CRJ7W8Iv2w1UjFRzRhjL8JxqFdERfgbR8IeAZfXOc7EigtRFpvQELN9onUj5gbHGLU/vT8cw9w5SaHvFavQysH6wyk/bJVV2L4uiwZFExjkvmRRxwPItjcaGKqYeWCo2jteUp2i7p3VHqT1cSysZ2OW+MLz1VZb6smfRwphebpoLzUHw5vuD1bws7GIi8DbdEhRYcCo0x0XbjtA4S5anlG1UQgPmmSVgdQ3mZn2X2Jx9OWf5PxRgdKMoX184YJGFWmtD76upBRYYO8KUamRlte+MNFFZpA2u4jKVkxA6gPYsmaUEv555TR51AFhTsVBdBYK2KSucAkubO6PiIlDGnuy3y3eUSCf0M4vB6iOmPPkyaY4Z146jBaB56BD0hQcWVjEdZo9oLbCIp6lDgUWWYfaURGXJE8G8iV8NK6oG+bb0OsEJrFxR/lsy9vstvj9Y3RzbKN34bXYyTWssb1em8uCS/UTnRskNvigiRVYhWF2ZeQl9leirRWbPMOflBubnRIFywBLF5kvKhKsDFnE0PVMaWtvTvsZiJWAtaCuLsEtCFAb7Z1A4pUPF7h3Bd4/sDZYnV+KK2HOMzqJtLG7YBiuQ+ZDMi2obdoGcjKFFYPVZGwoeJVzN8ncZUCI93CUl8MBC8wHbTrXAwrN3ga6HWi8AmJGnqFJgjVWWmEwMm4I7BsUcFAv9MmDtBk/aF6xpNX3lt+2ItpS6NN4V7tbowXBTdccuSlRPAVhzNi8L+k7ZV6XmYyA06DywwG3KTqsFljoVTMrtLg4OSGriRr58UfcEoUX5sgRhieT6ztGkZDr6Bs/IfMfWnmBNBlkowiQ62T/I9JJ5lz/CAInczNFHdLqFyTn7NwSNNhbGfxmKGmu6fLBe2LrCh4Qrl/N+uLFyXjAU7lCYvroWWLjEKaWxwOiQtFSxNQgAnnjFvJIFwhfVOCBdCmWx4febBubcfmANL9ODGJDV8cOvVutxeafraT5Uahc2DywgG9vVY6v16xZp6XuJZySSHqNGkPxr9uI6zsTuz36N0zeiyIeWC9aUnQdAyr4SnjPzQYDUwe2vR/KCkJcMSMwBKy3lYKkJWMkKiS/S8pCcVElJWBEKJ8mKYV9wTtQDMmk69/Qi+WnQxfuB1Um1HIDXT7ZJkls0hs5kdpZSPWCbwMEBS755ch2S3NJyzB+X6U5JlvOHI7pYeddMDHvL8e5ltszIGM0Da8oqJXRHceWlDSyg32zm+AUb/gv+OAM863BvsAYD+l+UxjoXGL878WvvL07Mktyiy5W+45FxfMAga50pTO37e4NlHrONpY3ZVeOGvWXx0ZMOzYAFzpmgMMtLORSkeCCd0FPCTOC35R0nCKlH8ReYA5Y9YOCHtGPDGacGMKhcsQ1vP3Bcp8VgSXjcPj4//9v3GLBgeU2bFv9RwWvQLidc/Q8FfVUuyV4KycTzoPgFzvFYeMgg23jHgrW3xmKW2/29RdkyZsykEYDYZ5kGSzlJLzc3t0yXg5PoXnpUQA/Z2sa7fRWJmkvywbJZfOUHumE7dCQw6V/Odqj+NqO0isCS5eXVyyRup/KwmeDBKbD+w7mwuiTmGgkiTjoRjwnWvus5vjC57U6DxYh9wGoy7Q4GXOfKC+NeTEzwFFhgkG3VKasM4jR8X+k25i1Rm0F4iLym/8gFyx7nj4OsMUrqyI2tM9dpSysfLCAv2FTp5WD5VTh+VbCE+MMkvZ5EeaH3lvD1kEGWbmIUzwrrh82wk34tZ42JXduF0c8psFRep/UYcmMon6hZ/Al30WwIsLIzWHc9Dyx3zEbk3jF3dFmFlZds2bxIkZULlgLSRZSD5e96OH9dsJIGxN9luETod+FEMA8Cixpixs3gMfKy6A4uWOxUvJ3rDO7RCMVLnCxYyh3vzgbDpBSFiiyo/spxFLsDCabWJjhgucfsOHjLGlAfmb+quaF1kxNWs+WBBbKVrRDzfqJp2t/O69lYw4kwjbuT5P1MSj5gOYdIgzLeyeLojpwOcFE/5p1RRQWZSZ1bCuS4TViwEN99wvgVwDj8ldJY/mIHT2ZSusQsWM1vqXGQ5YpxSYroMr95+uzkMQ8sTqBThV06E2zGn1p09MRhs0LnB+0XaA8FM/YKSnuvbfsypNwNJCK5eYqrXuy+4IL1jU5WuC5YZKADB0DUewxYZGWJJzbT8+3wVzpUUczZBZLdi5sBy31mzG50k2oDjx2si0JZ75jBMAcsHprVd0LT7SWtDpi7TXa0zidOnM9x7aWDDu0IwhnCFi7cQxELDyyHdn8XK1G6fdXQKGLAylutH57RZJ2Hv9JOaDwX7VSLTUqDNWETBGcCKBotmrvieAKbKSoHLIXTa9XBeuF9nftIczsR7MR8x9PgObOss7+4lElgVMtIygOLDWAq1Hj02BX5ORmwtLxqvKc79zxU1A47wsiD1axZuuc2DZbLTuaki3RfOSNmOltIb4OO7swBizvvrg6WSw/M4ACw7PZPKiqLnAfhJJrGOGQspD8vWM2DzwOLHpDQY+HtU6qBo4+CAUvN6zYaSbKw4cvwLDUNk6D6cdWadQtP32DA6plsRAUYZYZOhx5wlYdicH/QE0g+WNxw6OpgWfQA0d43gFQgqwmfaR8p2tBbDPfYrZjIz6RLUcVFJw5YFq1MlFWnlS9PO2qpIoz+ZsGCeV8g02ERWGnrx+8UCUFNbY+/9H7O+afq0WBJm2+sWxNlx4AmPeDmzREiccrBUnnY1Mg2Q8/B9R/F1SmSL6jtYLUVPxRbx5MkhPr2AOuNmq1XBZQDlnNHjxSKXCR0J0Z2OhM2k7tCxeAXgzXkR0aI/u4vHYnXD7NmpkQaLBGkF2KkjBeOodcoCQQf0uNmjsbivWMNsJhDHKqZxlzR/F5PHMNwJjR+JSlvD4hu+JS0gVqRTx5Y6XW0igIugkGHAetTHlh9LljsvJDzDEmH97PU4PaOH4oQ3TJOqznav1+6ja/xiLIXs2EzzweC9TsVn7mnYF1FxnXKe6HhmUGsnaWzva0sajZXecsrD6zUOlpViTaYMGCd5IJFzxASsKxVafydAtUNg1YxWCJMD4aseVfWQrT/kgsW30qrARbjeuHNMKsJ+SZJ3CBlvndpZSPvHfVMb+g7IPGaw7gPa0jofj4IrFQK/RyRFXpVvAQsUUsNArR/n3zVxVIKFlmIy0oNsJhop71PmfIXcBDjypIw8t1ku863PUumlLZeOYMBB6zJvmCJrwGW4DxXIAtAarG+DKz0znI2dKOshWjHOB8srre8TqpIhnS5rEI5EvoAm5TBTpbZqBA3dc9TQpMMACDjuskVDljmvmCFzXcgWMJw0S4hhQhMtjOXgRUcDJMIA5ZS1kJXbw8W4xfed1vp0n8rtKSj3YmHLfFKgpP9gkgTn0WNZDW8obDS7hWevA5YuFPOtEyIe0YSWkrBEtvMYMgoiLZQIqVDodw6FCxmHs4fWUslMtTaLj3kkG3QicqCrX1KTmKM6rjveWBV2KXKE/AqNpYvw/lyC8t2n8XGKA8swIYSMislXN9srnygrn4jsNi5sLGX+R5tDCadn2TEAp+YhfSciIBiieMF6L2+pcIDiw0qKfRj0QLHrzArjGVCTiJSNSjn7pkBg/BSDljK+gtjqen0t8Y600tc3dayzN3wCmAx1gfaJxKhG9NjTAUniWM0PHohHaD6zoxJFKWOap23zQFr+EAnP6k/4r8OWH5NbG/WWj3LKknOleUrskayYCmKO2SDROm5Nr3qm7+YGQrj1XsrsOht/MHpSDXFTPKKkJwylH8A6+opHZpQd5y1oqpJ44mfLKuicMBiWm2P2e/rgeXL0DFt72l5tpXTY2MUAZYBS9lOadegX5FB4mya0H+RS+wOm65nDbCa9L6cUrCazP4BpbaVtaHGUugJjUTN+sHvyV+NuhF/V+H7y8RL+XIQWMw8SKm/ueOVwQrFcqcdYLCWU+hGSIMFoD95WbKR04nL2KEX58C3YgXPGGR1wBrTNSo1m5is2RVDnhJh94a0HcGJD78EYlNwqDxJer3F6H74otoX3ExejXt5YNnM7Ld2OtTDwern9UOf9Z5CLljBAUdkrsVgmER5Mjk1S+KL2G0XNcBidqWXH91rMutosGbvM3FOgPirkpN5yG4nyn4Heh0D3g1m5wCRNGhXdTJNciNI6XqiZZH6szgJhg8Fy3mCuaEs5oo2RkLDmwULjKOW67N7jZI4UiYuWircxeQxJNcAa3JBkaKfFjwikBndHrydTfkyZ3wzSPapTFLpkD0L1Il1AFRXFe7a/zYh6JOjWv+uY/txwTpiTMkiwufgVzeNzoFguTdQ1HItO2b+FGpTNrohWcBpsJuNEscXa37JBSrLYu26GmDR0bylsTlEmERioF096wyTFQioq6COyemHAEzwPDFpIyBX1YdTUSKGBerg7pmu24cfKzdldjrAfCurARSkte+6zJT9sEXoXpt8JDA3LOk7vSc3YIgBS6e+9SGLxXE8w01tkcjX8KnkNzXAYnalg4+5T4iFGTtF5blixF/jis6hKm9nUWWcbdQs5EBLOgYUQK8SIn0J4GsHC8y400NIq+W354Ll3DMpFDa5ZAXOfkUXz35M4osOASs6ahbAPD1Jr8eogTHFRJAyYR3MGYAiiE/MZnlBq7xKprLi1gGLjb3mxgKmW4TBHa0rkeXQ2eMUY0XdlOw3l/Fn+oMuXVuUW0tWT0dQH/dIid6NBmraffwNqzMm3k7jtxy25qLLgKLLZ1FS9wPA8gZxIh4xx4FGVzgcLwryY+3YwTByLUzZxQUtm6E3qGPaeVYHLGY6KZUEQPvCZoJTqizMzVGCPlBHrBGUJK84b6bmnRCVFe6O/4arK3LVsPvRABiC8trQwgcr5XzXz7h4pFJvjg4Fy1lReTiA9pV3m8VMgLKzwhRYJrvjFIbmFLtFgmTo5al5L5Wsqx5YjBtWlG8rGE3sZwBkTsYMRpq7ZKwH8Dpz2oc9CF9TuSMZeBkDB20KNaL95DWHJLfQpHdBHoIeavrsc7LNeGwmUPmin3lHd8kGBMbT+X3BssesQQOXnFenE8FGEXbFqSKZvpLCtmd7nWTozZyF4HLSp9YBK7XjSBI7rukMfXFygElHOcJVkVnjtpLIcATXvDM7puvwCrizBOeMTQMldUpZH3Z/ib4Jp4h114JywGqk8t0pcMl6Xd3WgG24JIxsX7DMb2nP+uApdbfFOArkcO5YmNz2gRn1omhSa5VaaQdw9UJ3t9lLvZ8vdcAaprQigPr2YeXLbZ7FZR2xMf9Iv8oZQs2fl2pYB4B0Y5fjCZiMwgaDO1yjmxS36mqez4tl//5iGEEzoZPaqVHzEq9N080qqWDzc4o/OtO15727dnp9Jdlqu/dQOE8PPUBWl/1EbZn9j6yHObQTCsFKHV4b6VU3M8xJqhK+YHP6+7vKzdRdByzOjiOgBNLOd2ul1aS87afRskzXe1gHB9QDkmfx/Yw0coPb98NICRr4K3RSg4yI5PVR302nC7GciT07ugEwald0UX9TWm4O0l62WZAuDbbrNX6ZbKtTnqf9jfdFVkkgCK5XTzPPmy1ut+xj44wPxXne2VQS8YF9HU5sPYLKYL3eDhC7lTqRWmDlx7UZ+WA10pm7gHbmxarU7P/oPL47Udu6jGSoy2A72syDnFzTp5yMBL2w1ciWdmeXSYqHDDT69WHWfZnaTXv60v3Rab0fDVQ65yv6uEeAYC5YwyU3QhhwogxEJofxAWANV7xnAtKGOpSV1JPj+W8xWA0mckCUwxwnw7PUYFj8goHUAov3nQRSABbx3qYqpmigEx20Zrnz/u9ea7PbbVqz3/0oMUfz6uMot/NtMfiG/BOBF1r29UgDa4Z/eJ+h6XI6UEld7rNxiNnTxqTjdsbVA/4kOs7nAHdD2TkWtKA47KzkyJNUqPVx6CGbnFTLKE9LPbCoWBZWCsES3FW684Esr7Fm4ppbDbPZG8mZtJq0OC3Zf1WjgyvaHVRvYiKSdrXXtrF8sLDhVznnOnOy0CEOUuem6jNBcrhk2SFN7HpfHPnt8nKDF0s9sFKLlYkUgyUMZ1Km84FsfHzX+vEysbA0iOD/O3a38/5G0427Eq+UfeebxDpJiOneVW1iIvC+dhBCIAVgCW5FstCWGd4PWtIxy/cVBkIlCiwDq7HkzgyF+ZYT05wSZUv/qyZY7MpyIiVgEVdHO6tXgISnf23t0x2eWy5XD98/graqyUiBWqfU+2p5A6IGIRkwrZlRFS25Pdt3Y34RWILzUOVgG23NDu+HLUIPNxUOacJ9Qy3dlJ5X6LIAxdGk9reyFkY3zKpOXbCEJ+7xHqVg4aots0cmBAKAIklIkgKTE0+kWpVcAY3ZyFBE5Ke0NDdyhfEQyFK1orlSCBauDSr7qBWY/l4ODZvpnpRvhmYW6MtPWO2ybtL4kBVnlXcKZlja2mQyiNQGC78Mh90KYAmWnXPILPMm+npR2RPgdK8lGaAdfvlGc1lwimRQNFxvDjjXpwQsPN8YFW6WAfJFZrX44EC/yQYVf1Dylhn4K5wJPWJT3S4iFKyr/LNcied7wkY91gdLMHdi5jupApYQHMWdp7fIXA4eP3u1HAGN6aJtqKIf22AvDCOvbCDp7ZPuASdZCOVgCVZ3rOZpLUmTZ1lwXiE0efol44BNipTbKYd8BbCa7Ik3RuKoNnd8Xygu6pycLHwoWPjZHdjWGWdJRbDIvbP3xKeU8rT4h70P3qeTo1QRq98a/yX7Tler+3hCwAXZopfeAWm6AvlyrsZyvuJf013qMLMJCyjQOOPORL2/kiLbuRnqun8nV6n/k12J7KzVjOeKfKbqx1b6Uzo7Tkr6KycbyhVVKVwtRDWc2xtk9sfit0OBgTFl6hkfNk43W3lCWvuqdbZV1HZ4x9+VwSJucHv2/uxmgDRD07FoGhrcnO2+2nkLjqXi2J371YyE/jac5tfl/VqEftGapkmDC1x0c++iKXGblORhak2+rtZQjz4cTLWub8+emvwZg0MX2cxrdOYqm3OVM92cbWHyqQNJ1pTrZT9LKvMOOV+x1WSFKcXp7m6w9o1eDz9ofNYJFzqGTD3juLEKj2Rl6JjOxOU9vYI0TNe2T396ntc/tW3XPLjjTbv/ElZ7OGn6RXd/zk/tzPLO28vE7j493JHJ98ndw+K3PfkHamC5tvf0ZeTP+Ld3R52ftXukspjNn09f/NfDD+qd8lMHvqr8LypwnCUm4hwgAAAAAElFTkSuQmCC"
                  className="figure-img img-fluid rounded"
                  alt="lenskart"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,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"
                  className="figure-img img-fluid rounded"
                  alt="tcs"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUekx1O99DBqXtJUyfsUVl-hXAQ9DHXLQnDhl4kJay1Q7zQ3GN_QYsUxXC7Dqo6c7Fzg&usqp=CAU"
                  className="figure-img img-fluid rounded"
                  alt="knight"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcL0NFTGJncGdhUjc3NENFSEpMYUtKLnBuZyJ9:weare:O9wkuw13HEvmh8dhWvmoop5aKzVI61DKkYUIoShgtlA?width=1700&height=798"
                  className="figure-img img-fluid rounded"
                  alt="pepsi"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="data:image/png;base64,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"
                  className="figure-img img-fluid rounded"
                  alt="shriram"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAY0j781CZjwGZgTo3aZGvi6GuTrmA_z2oXw&usqp=CAU"
                  className="figure-img img-fluid rounded"
                  alt="bajaj"
                />
              </figure>
            </div>
            <div className="col-1 trusted-icon">
              <figure className="figure">
                <img
                  src="https://i.pinimg.com/736x/23/47/09/234709763ae5ba21730aa78b5d258eaf.jpg"
                  className="figure-img img-fluid rounded"
                  alt="cisco"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Body);
