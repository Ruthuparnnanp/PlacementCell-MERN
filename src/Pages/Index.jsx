import React from "react";
import about from "../../public/img/about.jpg";
import carousel1 from "../../public/img/carousel-1.jpg";
import carousel2 from "../../public/img/carousel-2.jpg";
import cat1 from "../../public/img/cat-1.jpg";
import cat2 from "../../public/img/cat-2.jpg";
import cat3 from "../../public/img/cat-3.jpg";
import cat4 from "../../public/img/cat-4.jpg";
import course1 from "../../public/img/course-1.jpg";
import course2 from "../../public/img/course-2.jpg";
import course3 from "../../public/img/course-3.jpg";
import team1 from "../../public/img/team-1.jpg";
import team2 from "../../public/img/team-2.jpg";
import team3 from "../../public/img/team-3.jpg";
import team4 from "../../public/img/team-4.jpg";
import test1 from "../../public/img/testimonial-1.jpg";
import test2 from "../../public/img/testimonial-2.jpg";
import test3 from "../../public/img/testimonial-3.jpg";
import test4 from "../../public/img/testimonial-4.jpg";
import LandingSection from "./LandingSection";
// import "../../public/css/bootstrap.min.css";

function Index() {
  return (
    <div>
      {/* <!-- Spinner Start --> */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ height: "3rem", width: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Navbar Start --> */}

      <nav className="bg-white text-blue-400 shadow sticky top-0 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="index.html" className="flex items-center px-4 lg:px-5">
            <h2 className="m-0 text-primary text-2xl">
              <i className="fa fa-book me-3"></i>eLEARNING
            </h2>
          </a>
          <button
            type="button"
            className="lg:hidden block text-gray-600 focus:outline-none"
          >
            <span className="text-xl">&#9776;</span>
          </button>
          <div className="hidden lg:flex flex-grow justify-end items-center space-x-4 p-0">
            <a
              href="index.html"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Home
            </a>
            <a
              href="about.html"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              About
            </a>
            <a
              href="courses.html"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Courses
            </a>
            <div className="group relative">
              <a
                href="#"
                className="text-gray-800 group-hover:text-primary transition duration-300"
              >
                Pages
              </a>
              <div className="hidden group-hover:block absolute z-10 top-full left-0 bg-white border border-gray-200 p-2 space-y-2">
                <a
                  href="team.html"
                  className="text-gray-800 hover:text-primary transition duration-300 block"
                >
                  Our Team
                </a>
                <a
                  href="testimonial.html"
                  className="text-gray-800 hover:text-primary transition duration-300 block"
                >
                  Testimonial
                </a>
                <a
                  href="404.html"
                  className="text-gray-800 hover:text-primary transition duration-300 block"
                >
                  404 Page
                </a>
              </div>
            </div>
            <a
              href="contact.html"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Contact
            </a>
            <a
              href=""
              className="bg-primary text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-primary-dark"
            >
              Join Now <i className="fa fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* <!-- Navbar End --> */}

      {/* <!-- Carousel Start --> */}
      {/* <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src={carousel1} alt="img" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24, 29, 56, .7)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown">
                      The Best Online Learning Platform
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea sanctus eirmod elitr.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src={carousel2} alt="img" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24, 29, 56, .7)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown">
                      Get Educated Online From Your Home
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea sanctus eirmod elitr.
                    </p>
                    <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Read More
                    </a>
                    <a
                      href=""
                      className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Carousel End --> */}

      {/* -----------------------------LandingSection------------------------- */}
      <LandingSection />

      {/* <!-- Service Start --> */}

      <div className="container mx-auto p-5 mt-10 mb-5 text-blue-400 py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3  py-16 px-8 bg-white shadow-xl rounded-lg p-4">
                <i className="fa fa-graduation-cap text-primary  text-3xl mb-4"></i>
                <h5 className="text-xl  font-semibold mb-3">
                  Skilled Instructors
                </h5>
                <p className="text-gray-600">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
            <div className="col wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3  py-16 px-8 bg-white shadow-xl rounded-lg p-4">
                <i className="fa fa-globe text-primary text-3xl mb-4"></i>
                <h5 className="text-xl font-semibold mb-3">Online Classes</h5>
                <p className="text-gray-600">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
            <div className="col wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3 py-16 px-8 bg-white shadow-xl rounded-lg p-4">
                <i className="fa fa-home text-primary text-3xl mb-4"></i>
                <h5 className="text-xl font-semibold mb-3">Home Projects</h5>
                <p className="text-gray-600">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
            <div className="col wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3 py-16 px-8 bg-white shadow-xl rounded-lg p-4">
                <i className="fa fa-book-open text-primary text-3xl mb-4"></i>
                <h5 className="text-xl font-semibold mb-3">Book Library</h5>
                <p className="text-gray-600">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Service End --> */}

      {/* <!-- About Start --> */}

      <div className="container p-5 mx-auto py-5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="relative h-[400px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={about}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="bg-white text-blue-500 text-start py-2 px-3 rounded-md inline-block">
                About Us
              </h6>
              <h1 className="text-3xl font-bold mb-4">Welcome to eLEARNING</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-blue-500 me-2"></i>
                  Skilled Instructors
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-blue-500 me-2"></i>
                  Online Classes
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-blue-500 me-2"></i>
                  International Certificate
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-blue-500 me-2"></i>
                  Skilled Instructors
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-blue-500 me-2"></i>
                  Online Classes
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-blue-500 me-2"></i>
                  International Certificate
                </p>
              </div>
              <a
                href="#"
                className="bg-blue-400 text-white py-3 px-5 mt-2 inline-block rounded-lg hover:bg-primary-dark transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About End --> */}

      {/* <!-- Categories Start --> */}

      <div className="container p-5 mx-auto py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="bg-white text-blue-500 px-3 py-1 inline-block rounded-lg">
              Categories
            </h6>
            <h1 className="text-3xl font-bold mt-5 mb-10">
              Courses Categories
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="wow zoomIn" data-wow-delay="0.1s">
                  <a
                    className="relative flex items-end justify-end h-60 overflow-hidden"
                    href=""
                  >
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={cat1}
                      alt=""
                    />
                    <div className="bg-white text-center py-3 px-4 absolute bottom-0 right-0">
                      <h5 className="text-lg font-semibold mb-1">Web Design</h5>
                      <small className="text-blue-500 block">49 Courses</small>
                    </div>
                  </a>
                </div>
                <div className="wow zoomIn" data-wow-delay="0.3s">
                  <a
                    className="relative flex items-end justify-end h-60 overflow-hidden"
                    href=""
                  >
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={cat2}
                      alt=""
                    />
                    <div className="bg-white text-center py-3 px-4 absolute bottom-0 right-0">
                      <h5 className="text-lg font-semibold mb-1">
                        Graphic Design
                      </h5>
                      <small className="text-blue-500 block">49 Courses</small>
                    </div>
                  </a>
                </div>
                <div className="wow zoomIn sm:col-span-2" data-wow-delay="0.5s">
                  <a
                    className="relative flex items-end justify-end h-60 overflow-hidden"
                    href=""
                  >
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={cat3}
                      alt=""
                    />
                    <div className="bg-white text-center py-3 px-4 absolute bottom-0 right-0">
                      <h5 className="text-lg font-semibold mb-1">
                        Video Editing
                      </h5>
                      <small className="text-blue-500 block">49 Courses</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1  wow zoomIn" data-wow-delay="0.7s">
              <a
                className="relative flex items-end justify-end h-96 sm:h-full overflow-hidden"
                href=""
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={cat4}
                  alt=""
                />
                <div className="bg-white text-center py-3 px-4 absolute bottom-0 right-0">
                  <h5 className="text-lg font-semibold mb-1">
                    Online Marketing
                  </h5>
                  <small className="text-blue-500 block">49 Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Categories Start --> */}

      {/* <!-- Courses Start --> */}

      <div className="container p-5 mx-auto py-5">
        <div className="container ">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">Popular Courses</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-center">
            <div
              className="col-span-1 md:col-span-2 lg:col-span-1 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="course-item bg-gray-100 relative overflow-hidden">
                <img className="w-full" src={course1} alt="" />

                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0 text-blue-400">$149.00</h3>
                  <div className="mb-3 flex items-center justify-center">
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <small className="ml-1">(123)</small>
                  </div>
                  <h5 className="mb-4">
                    Web Design & Development Course for Beginners
                  </h5>
                </div>
                <div className="flex justify-center border-t">
                  <small className="border-r py-2">
                    <i className="fa fa-user-tie text-blue-400 mr-2"></i>John
                    Doe
                  </small>
                  <small className="border-r py-2">
                    <i className="fa fa-clock text-blue-400 mr-2"></i>1.49 Hrs
                  </small>
                  <small className="py-2">
                    <i className="fa fa-user text-blue-400 mr-2"></i>30 Students
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 md:col-span-1 lg:col-span-1 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="course-item bg-gray-100 relative overflow-hidden">
                <img className="w-full" src={course2} alt="" />

                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0 text-blue-400">$149.00</h3>
                  <div className="mb-3 flex items-center justify-center">
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <small className="ml-1">(123)</small>
                  </div>
                  <h5 className="mb-4">
                    Web Design & Development Course for Beginners
                  </h5>
                </div>
                <div className="flex justify-center border-t">
                  <small className="border-r py-2">
                    <i className="fa fa-user-tie text-blue-400 mr-2"></i>John
                    Doe
                  </small>
                  <small className="border-r py-2">
                    <i className="fa fa-clock text-blue-400 mr-2"></i>1.49 Hrs
                  </small>
                  <small className="py-2">
                    <i className="fa fa-user text-blue-400 mr-2"></i>30 Students
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 md:col-span-1 lg:col-span-1 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="course-item bg-gray-100 relative overflow-hidden">
                <img className="w-full" src={course3} alt="" />

                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0 text-primary">$149.00</h3>
                  <div className="mb-3 flex items-center justify-center">
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <i className="fa fa-star text-blue-400"></i>
                    <small className="ml-1">(123)</small>
                  </div>
                  <h5 className="mb-4">
                    Web Design & Development Course for Beginners
                  </h5>
                </div>
                <div className="flex justify-center border-t">
                  <small className="border-r py-2">
                    <i className="fa fa-user-tie text-blue-400 mr-2"></i>John
                    Doe
                  </small>
                  <small className="border-r py-2">
                    <i className="fa fa-clock text-blue-400 mr-2"></i>1.49 Hrs
                  </small>
                  <small className="py-2">
                    <i className="fa fa-user text-blue-400 mr-2"></i>30 Students
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Courses End --> */}

      {/* <!-- Team Start --> */}

      <div className="container p-5 mx-auto py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-blue-400 px-3">
              Instructors
            </h6>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div
              className="col-span-1 md:col-span-1 lg:col-span-1 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item bg-gray-100">
                <div className="overflow-hidden">
                  <img className="w-full" src={team1} alt="Instructor 1" />
                </div>
                <div className="flex justify-center mt-2">
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small className="text-gray-500">Designation</small>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 md:col-span-1 lg:col-span-1 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item bg-gray-100">
                <div className="overflow-hidden">
                  <img className="w-full" src={team2} alt="Instructor 2" />
                </div>
                <div className="flex justify-center mt-2">
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small className="text-gray-500">Designation</small>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 md:col-span-1 lg:col-span-1 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item bg-gray-100">
                <div className="overflow-hidden">
                  <img className="w-full" src={team3} alt="Instructor 3" />
                </div>
                <div className="flex justify-center mt-2">
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small className="text-gray-500">Designation</small>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 md:col-span-1 lg:col-span-1 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item bg-gray-100">
                <div className="overflow-hidden">
                  <img className="w-full" src={team4} alt="Instructor 4" />
                </div>
                <div className="flex justify-center mt-2">
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-blue-400 mr-2 btn-primary-social" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small className="text-gray-500">Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={test1}
                style={{ width: "80px", height: "80px" }}
                alt="img"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={test2}
                style={{ width: "80px", height: "80px" }}
                alt="img"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={test3}
                style={{ width: "80px", height: "80px" }}
                alt="img"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={test4}
                style={{ width: "80px", height: "80px" }}
                alt="img"
              />
              <h5 className="mb-0">Client Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Testimonial End --> */}

      {/* <!-- Footer Start --> */}

      <div
        className="bg-blue-800 text-light  p-5 py-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container p-5 mx-auto py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-white mb-3">Quick Link</h4>
              <a className="btn  btn-link text-light" href="#">
                About Us
              </a>
              <a className="btn btn-link text-light" href="#">
                Contact Us
              </a>
              <a className="btn btn-link text-light" href="#">
                Privacy Policy
              </a>
              <a className="btn btn-link text-light" href="#">
                Terms & Condition
              </a>
              <a className="btn btn-link text-light" href="#">
                FAQs & Help
              </a>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="flex pt-2">
                <a className="btn mr-2 btn-outline-light btn-social" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn mr-2 btn-outline-light btn-social" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn mr-2 btn-outline-light btn-social" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn  btn-outline-light btn-social" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="col">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid bg-light p-1"
                    src="img/course-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p className="mb-2">
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </p>
              <div className="relative max-w-xs mx-auto">
                <input
                  className="form-input w-full py-3 pl-4 pr-10 border-0"
                  type="text"
                  placeholder="Your email"
                />
                <button className="btn btn-primary py-2 absolute top-0 right-0 mt-2 mr-2">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-3 md:mb-0">
                &copy;{" "}
                <a className="border-b border-light" href="#">
                  Your Site Name
                </a>
                , All Right Reserved. Designed By{" "}
                <a
                  className="border-b border-light"
                  href="https://htmlcodex.com"
                >
                  HTML Codex
                </a>
              </div>
              <div className="footer-menu space-x-4 mt-2 md:mt-0">
                <a href="" className="text-light">
                  Home
                </a>
                <a href="" className="text-light">
                  Cookies
                </a>
                <a href="" className="text-light">
                  Help
                </a>
                <a href="" className="text-light">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default Index;
