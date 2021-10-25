import "./styles.css";

import Pipeline from "@pipeline-ui-2/pipeline";

const svg1 = '<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 176 112.257"><g fill-rule="evenodd"><path d="M132.622 104.587L121.29 82.473 109.969 60.38 93.683 28.599l-11.888-23.2h0A9.92 9.92 0 0 0 72.963 0H60.241c-3.723 0-7.134 2.084-8.832 5.398L.58 104.585c-.837 1.633-.763 3.583.194 5.149s2.66 2.519 4.495 2.519h18.19l36.552-71.328a7.41 7.41 0 0 1 13.185 0l9.968 19.451 11.316 22.08 15.269 29.794h18.19c1.834 0 3.537-.954 4.493-2.52s1.03-3.515.193-5.148l-.004.002z" fill="#4550e6"></path><path d="M116.725 5.4H89.766l11.888 23.2h17.158c8.768.008 15.872 7.116 15.876 15.884s-7.095 15.882-15.863 15.897h-.885l10.513 20.517a38.07 38.07 0 0 0 8.898-4.129 38.65 38.65 0 0 0 18.007-32.694h0c-.001-21.343-17.29-38.652-38.634-38.677h-.002zM74.546 60.38H62.877l-.061-.047-26.347 51.923h26.033L77.699 82.31h5.2l2.659.034-11.01-21.964z" fill="#727aec"></path><path d="M94.478 82.462l-11.316-22.08h-8.613l11.012 21.964z" fill="#1924b9"></path></g></svg>'

const svg2 = '<svg xmlns="http://www.w3.org/2000/svg" width="140" viewBox="0 0 800 112.257"><path d="M176.695 90.552a5.23 5.23 0 0 1 .765-2.465l29.155-58.395a2.04 2.04 0 0 1 1.189-1.19c.578-.18 1.18-.266 1.785-.255h14.79a1.5 1.5 0 0 1 1.487.765 6.33 6.33 0 0 1 .553 1.7l12.495 58.395a2.95 2.95 0 0 1-.043 1.487 1.04 1.04 0 0 1-1.147.723h-14.62q-1.191 0-1.529-1.7l-2.295-10.88q-.086-.765-1.021-.766h-19.21a1.58 1.58 0 0 0-1.445 1.021l-5.779 11.56a1.62 1.62 0 0 1-.553.596 2.87 2.87 0 0 1-1.232.17h-12.41a.81.81 0 0 1-.935-.766zm39.439-25.5q1.359 0 .936-1.614l-3.655-16.745c-.058-.566-.228-.85-.51-.85q-.426 0-.851.765l-8.415 17.17c-.154.316-.198.675-.127 1.02.085.17.353.255.808.255zm40.29-36.804h14.705q1.274 0 .935 2.125l-6.63 47.089q-.255 1.361.85 1.36h26.606q1.358 0 1.189 1.955l-1.274 9.265q-.086.851-.468 1.063a2.91 2.91 0 0 1-1.317.213h-42.5q-2.125 0-1.87-2.38l8.33-59.16q.255-1.53 1.445-1.53zm52.529 60.605c-3.767-2.178-6.811-5.415-8.755-9.308a30.55 30.55 0 0 1-3.06-14.067 43.53 43.53 0 0 1 2.465-14.79 38 38 0 0 1 7.013-12.155 31.92 31.92 0 0 1 10.88-8.202c4.389-1.991 9.163-2.992 13.982-2.933a27.09 27.09 0 0 1 12.793 2.805 21.37 21.37 0 0 1 8.159 7.183 18.38 18.38 0 0 1 3.103 9.138q0 1.871-.765 1.955l-13.43 1.87q-.341.086-.596-.425a8.21 8.21 0 0 1-.51-1.955 15.66 15.66 0 0 0-1.445-4.292 8.16 8.16 0 0 0-2.975-3.23 9.45 9.45 0 0 0-5.1-1.232 10.8 10.8 0 0 0-7.437 2.677c-2.12 1.937-3.789 4.317-4.888 6.97a38.54 38.54 0 0 0-2.678 9.307 61.89 61.89 0 0 0-.808 9.86q0 6.97 2.508 9.604a9.1 9.1 0 0 0 6.928 2.636 12.37 12.37 0 0 0 4.25-.681 13.94 13.94 0 0 0 3.357-1.742c.999-.716 1.887-1.575 2.635-2.55.754-.975 1.422-2.013 1.997-3.103l.511-1.53q.593-1.103-.851-1.104h-9.265q-.936 0-.85-1.275l.935-7.99q.083-1.02.935-1.02l25.16.17a2.36 2.36 0 0 1 1.487.297q.297.299.128 1.318l-4.08 29.154a1.26 1.26 0 0 1-1.445 1.105h-2.805c-.878.021-1.669-.529-1.955-1.36l-2.04-5.61a.71.71 0 0 0-.723-.467 1.82 1.82 0 0 0-1.062.723 25.57 25.57 0 0 1-3.909 3.442c-1.784 1.262-3.747 2.251-5.823 2.933a25.5 25.5 0 0 1-8.287 1.189c-4.776.137-9.502-1.007-13.686-3.314zm64.77.127a21.72 21.72 0 0 1-9.011-9.138 29.81 29.81 0 0 1-3.145-14.109q0-1.531.085-3.23c.054-1.11.167-2.217.34-3.314.765-6.022 2.823-11.807 6.035-16.958a31.96 31.96 0 0 1 11.729-10.965 33.01 33.01 0 0 1 15.98-3.867 28.37 28.37 0 0 1 14.025 3.272 22.15 22.15 0 0 1 9.01 9.308 30.72 30.72 0 0 1 3.145 14.365q0 1.447-.085 3.102-.085 1.658-.34 3.357a40.9 40.9 0 0 1-5.95 16.703 31.43 31.43 0 0 1-11.645 10.88c-4.927 2.576-10.421 3.876-15.98 3.782a29.34 29.34 0 0 1-14.194-3.188zM398.5 75.338q3.697-4.928 5.228-15.979.338-2.465.467-4.547.129-2.082.128-3.868 0-6.204-2.125-8.967-2.125-2.761-6.8-2.763a12.02 12.02 0 0 0-10.242 5.185q-3.784 5.186-5.398 16.574-.34 2.382-.467 4.378-.127 1.998-.128 3.697 0 5.952 2.21 8.585 2.209 2.637 6.971 2.636a12 12 0 0 0 10.157-4.931z" fill="#4550e6"></path><path d="M447.246 68.028a1.37 1.37 0 0 0-1.062.34 1.88 1.88 0 0 0-.383 1.02l-2.89 20.146a2.08 2.08 0 0 1-.638 1.487c-.546.246-1.146.348-1.742.298h-13.345q-1.786 0-1.36-2.38l8.415-59.33a2.77 2.77 0 0 1 .383-1.105q.211-.255.978-.255h26.859c3.926-.056 7.83.607 11.518 1.955 3.233 1.163 6.075 3.21 8.203 5.908a15.7 15.7 0 0 1 3.06 9.902 20.29 20.29 0 0 1-3.4 11.815 21.89 21.89 0 0 1-9.222 7.565 31.73 31.73 0 0 1-13.218 2.635zm18.487-26.223a9.24 9.24 0 0 0-5.397-1.402h-8.925a1.62 1.62 0 0 0-1.317.468 2.99 2.99 0 0 0-.553 1.317l-1.7 12.325q-.085.851.128 1.063c.233.17.521.246.808.213h9.265a9.31 9.31 0 0 0 5.058-1.36c1.42-.88 2.591-2.109 3.4-3.57a9.63 9.63 0 0 0 1.232-4.76 4.89 4.89 0 0 0-1.998-4.292zm8.628 48.747a5.23 5.23 0 0 1 .765-2.465l29.155-58.395a2.04 2.04 0 0 1 1.189-1.19c.578-.18 1.18-.266 1.785-.255h14.79a1.5 1.5 0 0 1 1.487.765 6.33 6.33 0 0 1 .553 1.7l12.495 58.395a2.95 2.95 0 0 1-.043 1.487 1.04 1.04 0 0 1-1.147.723h-14.62q-1.191 0-1.529-1.7l-2.295-10.88q-.086-.765-1.02-.766h-19.21a1.58 1.58 0 0 0-1.445 1.021l-5.779 11.56a1.62 1.62 0 0 1-.553.596 2.87 2.87 0 0 1-1.232.17h-12.41a.81.81 0 0 1-.935-.766zm39.439-25.5q1.359 0 .936-1.614l-3.655-16.745c-.058-.566-.228-.85-.51-.85q-.426 0-.851.765l-8.415 17.17c-.154.316-.198.675-.127 1.02.085.17.353.255.808.255zm85.383-36.167a1.31 1.31 0 0 1-.212 1.232l-24.82 32.81c-.399.514-.715 1.088-.935 1.7-.33 1.11-.558 2.249-.681 3.4l-3.06 21.505q-.171 1.191-.68 1.487a4.07 4.07 0 0 1-1.87.298h-13.09q-1.106 0-1.36-.425c-.196-.455-.255-.957-.17-1.445l3.229-23.12a7.94 7.94 0 0 0 .085-1.912c-.081-.511-.224-1.011-.425-1.488l-15.47-32.895a1.91 1.91 0 0 1-.255-1.36q.168-.424 1.444-.425h15.046c.58-.058 1.156.144 1.572.552.353.446.626.949.808 1.488l8.67 20.4q.423 1.02 1.104 0l14.79-21.165a3.08 3.08 0 0 1 1.063-1.062c.506-.171 1.039-.243 1.572-.212h12.41q1.021 0 1.232.637z" fill="#727aec"></path><g fill-rule="evenodd"><path d="M132.622 104.587L121.29 82.473 109.969 60.38 93.683 28.599l-11.888-23.2h0A9.92 9.92 0 0 0 72.963 0H60.241c-3.723 0-7.134 2.084-8.832 5.398L.58 104.585c-.837 1.633-.763 3.583.194 5.149s2.66 2.519 4.495 2.519h18.19l36.552-71.328a7.41 7.41 0 0 1 13.185 0l9.968 19.451 11.316 22.08 15.269 29.794h18.19c1.834 0 3.537-.954 4.493-2.52s1.03-3.515.193-5.148l-.004.002z" fill="#4550e6"></path><path d="M116.725 5.4H89.766l11.888 23.2h17.158c8.768.008 15.872 7.116 15.876 15.884s-7.095 15.882-15.863 15.897h-.885l10.513 20.517a38.07 38.07 0 0 0 8.898-4.129 38.65 38.65 0 0 0 18.007-32.694h0c-.001-21.343-17.29-38.652-38.634-38.677h-.002zM74.546 60.38H62.877l-.061-.047-26.347 51.923h26.033L77.699 82.31h5.2l2.659.034-11.01-21.964z" fill="#727aec"></path><path d="M94.478 82.462l-11.316-22.08h-8.613l11.012 21.964z" fill="#1924b9"></path></g></svg>'

const screen2 =   '<div class="modal-backdrop fade show"></div><div class="modal-dialog"><div class="modal-content-2"><div class="modal-header"><div class="real-modal-title"><h5 class="modal-title" id="exampleModalLiveLabel"><h5 class="algopay-btn" href="/" aria-label="AlgoPay"><svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="40" viewBox="0 0 180 112.257" fill-rule="evenodd" height="24"><path xmlns="http://www.w3.org/2000/svg" d="M132.622 104.587L121.29 82.473 109.969 60.38 93.683 28.599l-11.888-23.2h0A9.92 9.92 0 0 0 72.963 0H60.241c-3.723 0-7.134 2.084-8.832 5.398L.58 104.585c-.837 1.633-.763 3.583.194 5.149s2.66 2.519 4.495 2.519h18.19l36.552-71.328a7.41 7.41 0 0 1 13.185 0l9.968 19.451 11.316 22.08 15.269 29.794h18.19c1.834 0 3.537-.954 4.493-2.52s1.03-3.515.193-5.148l-.004.002z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ap-lg"></path><path d="M116.725 5.4H89.766l11.888 23.2h17.158c8.768.008 15.872 7.116 15.876 15.884s-7.095 15.882-15.863 15.897h-.885l10.513 20.517a38.07 38.07 0 0 0 8.898-4.129 38.65 38.65 0 0 0 18.007-32.694h0c-.001-21.343-17.29-38.652-38.634-38.677h-.002zM74.546 60.38H62.877l-.061-.047-26.347 51.923h26.033L77.699 82.31h5.2l2.659.034-11.01-21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-md"></path><path d="M94.478 82.462l-11.316-22.08h-8.613l11.012 21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-sm"></path></svg><span class="fs-5"><strong>ALGO</strong>PAY</span></h5></div><button id="div-close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div  p={0} ><div class="higher-header-container"></div><div class="modal-body" id="sure" p={4} pb={1} mb={3}><h3 id="messagioHeadagio">Confirm Action</h3><p id="messagio">Are you sure you want to connect to MyAlgo?</p></div><div class="flexy" px={1}><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="div-close-2">Close</button><button id="algobutton" type="button" class="btn btn-primary">Connect to MyAlgo</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div>'

document.getElementById("root").innerHTML =
  '<div align="center"><div class="algopay-box"><button class=" btn btn-primary btn-lg d-inline-flex align-items-center mb-2 link-dark text-decoration-none" id="algopay-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpen()" href="/" aria-label="Bootstrap"><svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="40" viewBox="0 0 180 112.257" fill-rule="evenodd" height="24"><path xmlns="http://www.w3.org/2000/svg" d="M132.622 104.587L121.29 82.473 109.969 60.38 93.683 28.599l-11.888-23.2h0A9.92 9.92 0 0 0 72.963 0H60.241c-3.723 0-7.134 2.084-8.832 5.398L.58 104.585c-.837 1.633-.763 3.583.194 5.149s2.66 2.519 4.495 2.519h18.19l36.552-71.328a7.41 7.41 0 0 1 13.185 0l9.968 19.451 11.316 22.08 15.269 29.794h18.19c1.834 0 3.537-.954 4.493-2.52s1.03-3.515.193-5.148l-.004.002z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ap-lg"></path><path d="M116.725 5.4H89.766l11.888 23.2h17.158c8.768.008 15.872 7.116 15.876 15.884s-7.095 15.882-15.863 15.897h-.885l10.513 20.517a38.07 38.07 0 0 0 8.898-4.129 38.65 38.65 0 0 0 18.007-32.694h0c-.001-21.343-17.29-38.652-38.634-38.677h-.002zM74.546 60.38H62.877l-.061-.047-26.347 51.923h26.033L77.699 82.31h5.2l2.659.034-11.01-21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-md"></path><path d="M94.478 82.462l-11.316-22.08h-8.613l11.012 21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-sm"></path></svg><span class="fs-5"><strong>ALGO</strong>PAY</span></button>' 
  + 
  '</div><div id ="firstdiv" style="display: none" class="modal fade">' 
  + screen2 + 
  
  '<div id="sendscreen" style="display: none"><div id="tablevis" class="modal-body" style="display: none"><h3 id="messagioHeadagio">Complete Transfer</h3><p id="messagio">Please sign & send transaction</p><div class="bd-callout my-0"><div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#4550e6">  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/><path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></rect></svg><strong class="me-auto">TXN Summary</strong><snoopy-small small><p id="date"></p></small></div><div class="snoopy-box-boxed"><strong>My Address:&nbsp</strong><p id="snoopy"></p></div><div class="snoopy-box-2"><h6 class="snoopy-6">Amount:</h6><p id="snoopy2"></p></div></div></div><div p="{0}"><div class="higher-header-container"></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><button id="algosend" type="button" class="w-100 py-2 mb-2 btn btn-primary rounded-4">Send Transaction</button><button type="button" class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" data-bs-dismiss="modal" id="div-close-3">Cancel</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></h3></div><div id="algoflex3" style="display:none" ><div p="{0}"><div class="higher-header-container"></div><div class="modal-body" id="sure" p="{4}" pb="{1}" mb="{3}"><h3 id="messagioHeadagio">Transaction Away!</h3><p id="messagio">Would you like to track your transaction?</p></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><div class="w-100 alert alert-primary d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg><div class="le-flash" my={3} variant="info"><div class="snoopy-box-4"><p class="text-progress">Check progress on</p><a id="algolink" class="algoexplorer"> AlgoExplorer</a></div></div></div></div><div></div></div></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div ></div></div><div class="footer primary"></div></div></div></div></div></div></div></div></div><svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></symbol></svg>';

var indexerURL = "https://algoexplorerapi.io/idx2/v2/accounts/";
const myAlgoWallet = Pipeline.init();
const messageTwo = "Please sign & send transaction";
const headingTwo = "Complete Transfer";

if (window.details !== undefined) {
  var index = parseInt(window.details.index);
  var amount = window.details.amount;
  var note = window.details.note;
  var recipient = window.details.recipient;
} else {
  var index = 0;
  var amount = 0;
  var note = "";
  var recipient = "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4"; // Default address is set to HDL seed address. Please update recipient to your address before deploying.//
}

const state = {
  update: false,
  asaIndVis: "none",
  myTransactions: ["1"],
  tableVis: false,
  balance: "",
  asaNumbVis: "none",
  asa: "Algorand",
  asaNumb: 0,
  txID: "",
  amount: 1,
  note: "",
  recipient: "",
  con_status_text: "Status: Not Connected",
  address: "",
  isOpen: false,
  completed: false,
  shhh: true,
  stateZeros: 1000000,
  stateAmount: 0,
  assetName: "Algo",
  hide: false,
  timer: 5,
  loading: true
};

function tick() {
  setInterval(() => {
    if (this.state.timer !== 0) {
      let time = this.state.timer;
      Object.assign({ timer: time - 1 });
    } else {
      Object.assign({ loading: false });
    }
  }, 1000);
}

function updateBalance() {
  let url2 = indexerURL + state.address;
  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      let myBalance =
        ". Balance: " +
        JSON.stringify(data.account.amount / 1000000) +
        " Algos";
      Object.assign(state, { balance: myBalance });
    })
    .catch(function () {
      alert("Error occured  " + url2);
    });
}

function getZeros() {
  if (index !== 0) {
    let url2 = "https://algoexplorerapi.io/idx2/v2/assets/" + index;
    console.log(url2);
    fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let zeros = data.asset.params.decimals;
        let value = "1";
        for (var i = 0; i < zeros; i++) {
          value = value + "0";
        }
        Object.assign(state, { stateAmount: amount / parseInt(value) });
        Object.assign(state, { assetName: data.asset.params["unit-name"] });
        document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

      })
      .catch(function () {
        alert("Error occured  " + url2);
      });
  } else {
    Object.assign(state, { stateAmount: amount / 1000000 });
    document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

  }
}

function componentDidMount() {
  Object.assign({ stateAmount: amount });
  this.interval = setInterval(() => {
    if (this.state.txID !== "") {
      Object.assign({ completed: true });
    }
    if (this.state.address !== "") {
      Object.assign({
        shhh: false,
        messagio: messageTwo,
        messagioHeadagio: headingTwo
      });
    }
  }, 1000);
}

function close() {
  Object.assign({ isOpen: false });
  document.getElementById("firstdiv").style.display = "none";
  document.getElementById("firstdiv").className = "modal fade";
}

function connect() {
  Pipeline.connect(myAlgoWallet).then((data) => {
    Object.assign(state, { address: data });
    Object.assign(state, { con_status_text: "Connected" });
    Object.assign(state, { tableVis: true });
    updateBalance();
    document.getElementById("sure").style.display = "none";
    document.getElementById("shhh").style.display = "none";
    document.getElementById("tablevis").style.display = "block";
    document.getElementById("sendscreen").style.display = "block";
    document.getElementById("snoopy").innerText = "" + state.address.slice(0, 20) + "...";
  });
}

function send() {
  Pipeline.send(
    recipient,
    amount,
    note,
    state.address,
    myAlgoWallet,
    index
  ).then((data) => {
    if (data !== undefined){
    Object.assign(state, { txID: data });
    document.getElementById("sendscreen").style.display = "none";
    document.getElementById("algoflex3").style.display = "block";
    document.getElementById("algolink").href = "https://algoexplorer.io/tx/" + state.txID;
    }
    else {alert("transaction cancelled")}
  });
}

function hide() {
  Object.assign(state, { hide: true });
}

function setOpen() {
  document.getElementById("firstdiv").style.display = "block";
  document.getElementById("firstdiv").className = "modal fade show";
}
getZeros();
document.getElementById("algopay-btn").onclick = setOpen;
document.getElementById("div-close").onclick = close;
document.getElementById("div-close-2").onclick = close;
document.getElementById("div-close-3").onclick = close;
document.getElementById("algobutton").onclick = connect;
document.getElementById("algosend").onclick = send;


