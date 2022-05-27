import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
export default function Dashboard(props) {
  return (
    <Container fluid>
      <div className="header-mobile shadow">
        <span class="toggle">
          <span class="bars"></span>
        </span>

        <div className="avatar">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bell_icon "
          >
            <path
              d="M12.5 19.2708C12.934 19.2708 13.3028 19.1187 13.6062 18.8146C13.9104 18.5111 14.0625 18.1424 14.0625 17.7083H10.9375C10.9375 18.1424 11.0896 18.5111 11.3937 18.8146C11.6972 19.1187 12.066 19.2708 12.5 19.2708ZM7.29165 16.6667H17.7083V14.5833H16.6666V11.875C16.6666 10.816 16.3934 9.84791 15.8469 8.97083C15.2996 8.09444 14.5312 7.53472 13.5416 7.29166V6.77083C13.5416 6.47569 13.442 6.22812 13.2427 6.02812C13.0427 5.82881 12.7951 5.72916 12.5 5.72916C12.2048 5.72916 11.9576 5.82881 11.7583 6.02812C11.5583 6.22812 11.4583 6.47569 11.4583 6.77083V7.29166C10.4687 7.53472 9.70067 8.09444 9.15415 8.97083C8.60692 9.84791 8.33331 10.816 8.33331 11.875V14.5833H7.29165V16.6667ZM12.5 22.9167C11.059 22.9167 9.70484 22.643 8.43748 22.0958C7.17012 21.5493 6.06769 20.8073 5.13019 19.8698C4.19269 18.9323 3.45067 17.8299 2.90415 16.5625C2.35692 15.2951 2.08331 13.941 2.08331 12.5C2.08331 11.059 2.35692 9.70486 2.90415 8.4375C3.45067 7.17013 4.19269 6.0677 5.13019 5.1302C6.06769 4.1927 7.17012 3.45034 8.43748 2.90312C9.70484 2.35659 11.059 2.08333 12.5 2.08333C13.941 2.08333 15.2951 2.35659 16.5625 2.90312C17.8298 3.45034 18.9323 4.1927 19.8698 5.1302C20.8073 6.0677 21.5493 7.17013 22.0958 8.4375C22.643 9.70486 22.9166 11.059 22.9166 12.5C22.9166 13.941 22.643 15.2951 22.0958 16.5625C21.5493 17.8299 20.8073 18.9323 19.8698 19.8698C18.9323 20.8073 17.8298 21.5493 16.5625 22.0958C15.2951 22.643 13.941 22.9167 12.5 22.9167Z"
              fill="black"
            />
          </svg>
          <Link to="" class="avatar-det">
            {/* <img
              className=" rounded-circle shadow"
              height={30}
              width={30}
              src={avatar}
            /> */}
            <span>John</span>
            <i className="icon fa fa-caret-down" />
          </Link>
        </div>
      </div>
      <div className="dashboard-section d-flex">
        {props.leftSidebar}
        <div className="main">
          <Row className="d-flex flex-direction-column">
            <Col md={12}>
              <div className="main-cont">
                <Row className="cards">
                  <h2 className="title mb-3">May 2022 Performance</h2>
                  <Col md="4" className="mt-3 mt-md-0">
                    <Col sm={12}>
                      <div className="performance card">
                        <h4>VIEWS</h4>
                        <span>7,124,568</span>
                      </div>
                    </Col>
                  </Col>
                  <Col md="4">
                    <Col sm={12} className="mt-3 mt-md-0">
                      <div className="performance card">
                        <h4>FOLLOWS</h4>
                        <span>91,344</span>
                      </div>
                    </Col>
                  </Col>
                  <Col md="4">
                    <Col sm={12} className="mt-3 mt-md-0">
                      <div className="performance card">
                        <h4>LIKES</h4>
                        <span>654,931</span>
                      </div>
                    </Col>
                  </Col>
                </Row>
                <Row className="cards mt-5">
                  <h2 className="title mb-3">Statistics</h2>
                  <Col md="6">
                    <Col sm={12} className="mt-3 mt-md-0">
                      <div className="statistics card light">
                        <div className="stat">
                          <h4>Weekly Target</h4>
                          <span>25% achieved</span>
                        </div>
                        <div className="border border-dark"></div>
                        <div class="circular">
                          <div class="inner"></div>
                          <div class="number">25%</div>
                          <div class="circle">
                            <div class="bar left">
                              <div class="progress"></div>
                            </div>
                            <div class="bar right">
                              <div class="progress"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col md="6">
                    <Col sm={12} className="mt-3 mt-md-0">
                      <div className="statistics card yellow ">
                        <div className="stat">
                          <h4>Weekly Target</h4>
                          <span>25% achieved</span>
                        </div>
                        <div className="border border-dark"></div>
                        <div class="circular">
                          <div class="inner"></div>
                          <div class="number">25%</div>
                          <div class="circle">
                            <div class="bar left">
                              <div class="progress"></div>
                            </div>
                            <div class="bar right">
                              <div class="progress"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Col>
                </Row>
                <h2 className="title mt-5 mb-3">Monthly Tasks</h2>
                <section className="cards  monthly_task_cont">
                  <Row className="">
                    <Col md={12}>
                      <ul className="monthly_tasks">
                        <li>
                          <Link to="">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                            >
                              <rect
                                width="50"
                                height="50"
                                rx="5"
                                fill="#2F63E8"
                              />
                              <path
                                d="M29.7083 16.6458C29.7083 16.5077 29.6535 16.3752 29.5558 16.2775C29.4581 16.1799 29.3256 16.125 29.1875 16.125H26.5833C25.272 16.0597 23.9881 16.516 23.0122 17.3943C22.0363 18.2727 21.4477 19.5016 21.375 20.8125V23.625H18.7708C18.6327 23.625 18.5002 23.6799 18.4025 23.7775C18.3049 23.8752 18.25 24.0077 18.25 24.1458V26.8542C18.25 26.9923 18.3049 27.1248 18.4025 27.2224C18.5002 27.3201 18.6327 27.375 18.7708 27.375H21.375V34.3542C21.375 34.4923 21.4299 34.6248 21.5275 34.7224C21.6252 34.8201 21.7577 34.875 21.8958 34.875H25.0208C25.159 34.875 25.2914 34.8201 25.3891 34.7224C25.4868 34.6248 25.5417 34.4923 25.5417 34.3542V27.375H28.2708C28.3867 27.3767 28.4997 27.3397 28.5922 27.2699C28.6846 27.2001 28.7511 27.1014 28.7812 26.9896L29.5312 24.2812C29.552 24.2043 29.5548 24.1236 29.5394 24.0454C29.524 23.9672 29.4909 23.8936 29.4426 23.8302C29.3943 23.7668 29.3321 23.7153 29.2608 23.6797C29.1895 23.6442 29.1109 23.6254 29.0312 23.625H25.5417V20.8125C25.5676 20.5547 25.6887 20.3157 25.8813 20.1424C26.0739 19.969 26.3242 19.8737 26.5833 19.875H29.1875C29.3256 19.875 29.4581 19.8201 29.5558 19.7224C29.6535 19.6248 29.7083 19.4923 29.7083 19.3542V16.6458Z"
                                fill="white"
                              />
                            </svg>
                            <div className="info">
                              <h4>Facebook Ads</h4>
                              <span>
                                Gain atleast 50 visits through facebook ads
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                            >
                              <rect
                                width="50"
                                height="50"
                                rx="5"
                                fill="#5FB3F0"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20.3333 16.125C20.8859 16.125 21.4158 16.3445 21.8065 16.7352C22.1972 17.1259 22.4167 17.6558 22.4167 18.2083V21.3333H28.6667C29.2192 21.3333 29.7491 21.5528 30.1398 21.9435C30.5305 22.3342 30.75 22.8641 30.75 23.4167C30.75 23.9692 30.5305 24.4991 30.1398 24.8898C29.7491 25.2805 29.2192 25.5 28.6667 25.5H22.4167V27.5833C22.4167 28.4121 22.7459 29.207 23.332 29.793C23.918 30.3791 24.7129 30.7083 25.5417 30.7083H28.6667C29.2192 30.7083 29.7491 30.9278 30.1398 31.3185C30.5305 31.7092 30.75 32.2391 30.75 32.7917C30.75 33.3442 30.5305 33.8741 30.1398 34.2648C29.7491 34.6555 29.2192 34.875 28.6667 34.875H25.5417C23.6078 34.875 21.7531 34.1068 20.3857 32.7393C19.0182 31.3719 18.25 29.5172 18.25 27.5833V18.2083C18.25 17.6558 18.4695 17.1259 18.8602 16.7352C19.2509 16.3445 19.7808 16.125 20.3333 16.125Z"
                                fill="white"
                              />
                            </svg>

                            <div className="info">
                              <h4>Twitter</h4>
                              <span>
                                Gain atleast 12,500 views on SET posts
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                            >
                              <rect
                                width="50"
                                height="50"
                                rx="5"
                                fill="#2F63E8"
                              />
                              <path
                                d="M29.7083 16.6458C29.7083 16.5077 29.6535 16.3752 29.5558 16.2775C29.4581 16.1799 29.3256 16.125 29.1875 16.125H26.5833C25.272 16.0597 23.9881 16.516 23.0122 17.3943C22.0363 18.2727 21.4477 19.5016 21.375 20.8125V23.625H18.7708C18.6327 23.625 18.5002 23.6799 18.4025 23.7775C18.3049 23.8752 18.25 24.0077 18.25 24.1458V26.8542C18.25 26.9923 18.3049 27.1248 18.4025 27.2224C18.5002 27.3201 18.6327 27.375 18.7708 27.375H21.375V34.3542C21.375 34.4923 21.4299 34.6248 21.5275 34.7224C21.6252 34.8201 21.7577 34.875 21.8958 34.875H25.0208C25.159 34.875 25.2914 34.8201 25.3891 34.7224C25.4868 34.6248 25.5417 34.4923 25.5417 34.3542V27.375H28.2708C28.3867 27.3767 28.4997 27.3397 28.5922 27.2699C28.6846 27.2001 28.7511 27.1014 28.7812 26.9896L29.5312 24.2812C29.552 24.2043 29.5548 24.1236 29.5394 24.0454C29.524 23.9672 29.4909 23.8936 29.4426 23.8302C29.3943 23.7668 29.3321 23.7153 29.2608 23.6797C29.1895 23.6442 29.1109 23.6254 29.0312 23.625H25.5417V20.8125C25.5676 20.5547 25.6887 20.3157 25.8813 20.1424C26.0739 19.969 26.3242 19.8737 26.5833 19.875H29.1875C29.3256 19.875 29.4581 19.8201 29.5558 19.7224C29.6535 19.6248 29.7083 19.4923 29.7083 19.3542V16.6458Z"
                                fill="white"
                              />
                            </svg>
                            <div className="info">
                              <h4>Facebook</h4>
                              <span>
                                Promote the SET even on facebook with 5 posts
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <svg
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon"
                            >
                              <rect
                                width="50"
                                height="50"
                                rx="5"
                                fill="#2F63E8"
                              />
                              <path
                                d="M29.7083 16.6458C29.7083 16.5077 29.6535 16.3752 29.5558 16.2775C29.4581 16.1799 29.3256 16.125 29.1875 16.125H26.5833C25.272 16.0597 23.9881 16.516 23.0122 17.3943C22.0363 18.2727 21.4477 19.5016 21.375 20.8125V23.625H18.7708C18.6327 23.625 18.5002 23.6799 18.4025 23.7775C18.3049 23.8752 18.25 24.0077 18.25 24.1458V26.8542C18.25 26.9923 18.3049 27.1248 18.4025 27.2224C18.5002 27.3201 18.6327 27.375 18.7708 27.375H21.375V34.3542C21.375 34.4923 21.4299 34.6248 21.5275 34.7224C21.6252 34.8201 21.7577 34.875 21.8958 34.875H25.0208C25.159 34.875 25.2914 34.8201 25.3891 34.7224C25.4868 34.6248 25.5417 34.4923 25.5417 34.3542V27.375H28.2708C28.3867 27.3767 28.4997 27.3397 28.5922 27.2699C28.6846 27.2001 28.7511 27.1014 28.7812 26.9896L29.5312 24.2812C29.552 24.2043 29.5548 24.1236 29.5394 24.0454C29.524 23.9672 29.4909 23.8936 29.4426 23.8302C29.3943 23.7668 29.3321 23.7153 29.2608 23.6797C29.1895 23.6442 29.1109 23.6254 29.0312 23.625H25.5417V20.8125C25.5676 20.5547 25.6887 20.3157 25.8813 20.1424C26.0739 19.969 26.3242 19.8737 26.5833 19.875H29.1875C29.3256 19.875 29.4581 19.8201 29.5558 19.7224C29.6535 19.6248 29.7083 19.4923 29.7083 19.3542V16.6458Z"
                                fill="white"
                              />
                            </svg>
                            <div className="info">
                              <h4>Facebook</h4>
                              <span>
                                Post even photos taken by Micheal Scott
                                (Photographer)
                              </span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </section>
              </div>
            </Col>
          </Row>
        </div>
        {props.rightSidebar}
      </div>
    </Container>
  );
}
