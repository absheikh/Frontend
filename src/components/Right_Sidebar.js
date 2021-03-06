import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png";

function Right_Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>
              Logout <i class="fa fa-lock"></i>
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <i class="fa fa-question-circle"></i> Are you sure you want to
          log-out?
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger btn-block">Logout</Button>
        </Modal.Footer>
      </Modal>
      <div className="right-sidebar order-md-3">
        <div className="main-cont">
          <div className="header w-100 align-items-center">
            <div className="user">
              <h4>Hi John</h4>
              <span>Good morning!</span>
            </div>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bell_icon"
            >
              <g filter="url(#filter0_d_78_38)">
                <rect x="4" y="2" width="30" height="30" rx="5" fill="white" />
                <rect
                  x="4.05"
                  y="2.05"
                  width="29.9"
                  height="29.9"
                  rx="4.95"
                  stroke="black"
                  stroke-width="0.1"
                />
              </g>
              <path
                d="M18.5 24.2709C18.934 24.2709 19.3028 24.1188 19.6062 23.8146C19.9104 23.5112 20.0625 23.1424 20.0625 22.7084H16.9375C16.9375 23.1424 17.0896 23.5112 17.3937 23.8146C17.6972 24.1188 18.066 24.2709 18.5 24.2709ZM13.2917 21.6667H23.7083V19.5834H22.6667V16.875C22.6667 15.816 22.3934 14.848 21.8469 13.9709C21.2997 13.0945 20.5312 12.5348 19.5417 12.2917V11.7709C19.5417 11.4757 19.442 11.2282 19.2427 11.0282C19.0427 10.8289 18.7951 10.7292 18.5 10.7292C18.2049 10.7292 17.9576 10.8289 17.7583 11.0282C17.5583 11.2282 17.4583 11.4757 17.4583 11.7709V12.2917C16.4687 12.5348 15.7007 13.0945 15.1542 13.9709C14.6069 14.848 14.3333 15.816 14.3333 16.875V19.5834H13.2917V21.6667ZM18.5 27.9167C17.059 27.9167 15.7049 27.6431 14.4375 27.0959C13.1701 26.5493 12.0677 25.8073 11.1302 24.8698C10.1927 23.9323 9.45069 22.8299 8.90417 21.5625C8.35694 20.2952 8.08333 18.941 8.08333 17.5C8.08333 16.0591 8.35694 14.7049 8.90417 13.4375C9.45069 12.1702 10.1927 11.0677 11.1302 10.1302C12.0677 9.19275 13.1701 8.45039 14.4375 7.90317C15.7049 7.35664 17.059 7.08337 18.5 7.08337C19.941 7.08337 21.2951 7.35664 22.5625 7.90317C23.8299 8.45039 24.9323 9.19275 25.8698 10.1302C26.8073 11.0677 27.5493 12.1702 28.0958 13.4375C28.6431 14.7049 28.9167 16.0591 28.9167 17.5C28.9167 18.941 28.6431 20.2952 28.0958 21.5625C27.5493 22.8299 26.8073 23.9323 25.8698 24.8698C24.9323 25.8073 23.8299 26.5493 22.5625 27.0959C21.2951 27.6431 19.941 27.9167 18.5 27.9167Z"
                fill="black"
              />
              <defs>
                <filter
                  id="filter0_d_78_38"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_78_38"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_78_38"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="avatar mt-5 mb-3">
            <img
              className="d-block mx-auto"
              src={avatar}
              alt="profile picture"
            />
            <h5 class="mt-4 text-center">Marketing Manager @ orangewhale</h5>
          </div>
          <div className="social-details d-flex flex-row justify-content-between mt-5">
            <div className="d-flex flex-column align-items-center">
              <h5>736k</h5>
              <span>Followers</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h5>76k</h5>
              <span>Following</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h5>432</h5>
              <span>Posts</span>
            </div>
          </div>
          <Link to="" className="footer " onClick={handleShow}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M2.08335 12.5L6.25002 8.33334V11.4583H14.5834V13.5417H6.25002V16.6667L2.08335 12.5ZM4.16669 18.75C5.47845 20.499 7.30728 21.791 9.39411 22.4429C11.4809 23.0947 13.72 23.0735 15.7941 22.3821C17.8681 21.6908 19.6721 20.3643 20.9505 18.5907C22.2288 16.8171 22.9167 14.6863 22.9167 12.5C22.9167 10.3137 22.2288 8.18288 20.9505 6.40928C19.6721 4.63568 17.8681 3.30925 15.7941 2.61789C13.72 1.92653 11.4809 1.90528 9.39411 2.55716C7.30728 3.20904 5.47845 4.50099 4.16669 6.25001H7.01044C8.21323 5.18924 9.69657 4.49808 11.2824 4.25945C12.8683 4.02082 14.4894 4.24486 15.9511 4.9047C17.4128 5.56453 18.653 6.63212 19.523 7.97937C20.393 9.32662 20.8558 10.8963 20.8558 12.5C20.8558 14.1037 20.393 15.6734 19.523 17.0206C18.653 18.3679 17.4128 19.4355 15.9511 20.0953C14.4894 20.7552 12.8683 20.9792 11.2824 20.7406C9.69657 20.5019 8.21323 19.8108 7.01044 18.75H4.16669Z"
                fill="#E13333"
              />
            </svg>
            Log out of account
          </Link>
        </div>
      </div>
    </>
  );
}
export default Right_Sidebar;
