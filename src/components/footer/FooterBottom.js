import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Google from '@mui/icons-material/Google';
const FooterBottom = () => {
  return (
    <div className="bg-gray-200">
      <footer>
        <div className="p-10 bg-gray-800 text-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="mb-5">
                <h3 className=" text-2xl pb-4 text-yellow-600 ">
                  Arun Company
                </h3>
                <p className="text-gray-300">
                  101 Kuraghat street <br />
                  ,Gorakhpur,273010 <br />
                  U.p , India
                  <br />
                  <strong>
                    <PhoneInTalkIcon className="text-yellow-600 -ml-8 mr-2 hover:text-white  " />
                    Phone :
                  </strong>{" "}
                  +91 8007412335
                  <br />
                  <strong>
                    <EmailIcon className="text-yellow-600 -ml-8 mr-2 hover:text-white  " />
                    Email :
                  </strong>{" "}
                  arun@gmail.com
                  <br />
                </p>
              </div>
              <div className="mb-5">
                <h3 className="text-2xl pb-4 text-yellow-600 ">Useful Links</h3>
                <ul className="text-gray-300">
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h3 className="text-2xl pb-4 text-yellow-600 ">Our Services</h3>
                <ul className="text-gray-300">
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                  <li className="pb-3">
                    <ChevronRightIcon className="text-yellow-300" />{" "}
                    <a className="hover:text-blue-400" href="#">
                      home
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h3 className="text-2xl pb-4 text-yellow-600 ">
                  Join Our NewsLetter
                </h3>
                <p className="text-gray-300 pb-2">
                  lorem gfhj rtyui dfvcbn rtyuio fhjk
                </p>
                <form className="flex flex-row flex-wrap">
                  <input
                    type="text"
                    className="text-gray-900 w-2/3 p-2 focus:border-yellow-500"
                    placeholder="arun@gmail.com"
                    name="email"
                    id="email"
                  />
                  <button className="p-2 w-1/3 bg-yellow-800 text-white hover:bg-yellow-500">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 text-gray-400 px-10">
          <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
            <div className="text-center">
              <div>
                Copyright{" "}
                <strong>
                  <span>Company</span>
                </strong>
                .All Rights Reserved
              </div>
              <div>
                Designed by{" "}
                <a
                  href="#"
                  className="text-yellow-500 hover:text-white text-xl font-bold">
                  Arun Yadav
                </a>
              </div>
            </div>
            <div className="text-center text-xl text-white">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-900 hover:bg-yellow-600 mx-1 inline-block pt-1">
                <Twitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-900 hover:bg-yellow-600 mx-1 inline-block pt-1">
                <Instagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-900 hover:bg-yellow-600 mx-1 inline-block pt-1">
                <Facebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-900 hover:bg-yellow-600 mx-1 inline-block pt-1">
                <LinkedIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-900 hover:bg-yellow-600 mx-1 inline-block pt-1">
                <Google />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterBottom