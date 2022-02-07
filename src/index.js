import "./styles.css";

import Pipeline from "@pipeline-ui-2/pipeline";


const screen2 = '<div class="modal-backdrop fade show"></div><div class="modal-dialog"><div class="modal-content-2"><div class="modal-header"><div class="real-modal-title"><h5 class="modal-title" id="exampleModalLiveLabel"><h5 class="algopay-btn" href="/" aria-label="AlgoPay"><svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="40" viewBox="0 0 180 112.257" fill-rule="evenodd" height="24"><path xmlns="http://www.w3.org/2000/svg" d="M132.622 104.587L121.29 82.473 109.969 60.38 93.683 28.599l-11.888-23.2h0A9.92 9.92 0 0 0 72.963 0H60.241c-3.723 0-7.134 2.084-8.832 5.398L.58 104.585c-.837 1.633-.763 3.583.194 5.149s2.66 2.519 4.495 2.519h18.19l36.552-71.328a7.41 7.41 0 0 1 13.185 0l9.968 19.451 11.316 22.08 15.269 29.794h18.19c1.834 0 3.537-.954 4.493-2.52s1.03-3.515.193-5.148l-.004.002z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ap-lg"></path><path d="M116.725 5.4H89.766l11.888 23.2h17.158c8.768.008 15.872 7.116 15.876 15.884s-7.095 15.882-15.863 15.897h-.885l10.513 20.517a38.07 38.07 0 0 0 8.898-4.129 38.65 38.65 0 0 0 18.007-32.694h0c-.001-21.343-17.29-38.652-38.634-38.677h-.002zM74.546 60.38H62.877l-.061-.047-26.347 51.923h26.033L77.699 82.31h5.2l2.659.034-11.01-21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-md"></path><path d="M94.478 82.462l-11.316-22.08h-8.613l11.012 21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-sm"></path></svg><span class="fs-5"><strong>ALGO</strong>PAY</span></h5></div><button id="div-close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div  p={0} ><div class="higher-header-container"></div><div class="modal-body" id="sure" p={4} pb={1} mb={3}><h3 id="messagioHeadagio">Confirm Action</h3><p id="messagio">Select wallet, then click "Connect"</p></div><div class="flexy" px={1}><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><div class="dropdown"><select class="form-select form-select-lg" aria-label=".form-select-lg example" id="walletswitch"><option>myAlgoWallet</option><option>WalletConnect</option><option>AlgoSigner</option></select></div><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="div-close-2">Close</button><button id="algobutton" type="button" class="btn btn-primary">Connect</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div>'

document.getElementById("root").innerHTML =
  '<div align="center"><div class="algopay-box"><button class=" btn btn-primary btn-lg d-inline-flex align-items-center mb-2 link-dark text-decoration-none" id="algopay-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpen()" href="/" aria-label="Bootstrap"><svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="40" viewBox="0 0 180 112.257" fill-rule="evenodd" height="24"><path xmlns="http://www.w3.org/2000/svg" d="M132.622 104.587L121.29 82.473 109.969 60.38 93.683 28.599l-11.888-23.2h0A9.92 9.92 0 0 0 72.963 0H60.241c-3.723 0-7.134 2.084-8.832 5.398L.58 104.585c-.837 1.633-.763 3.583.194 5.149s2.66 2.519 4.495 2.519h18.19l36.552-71.328a7.41 7.41 0 0 1 13.185 0l9.968 19.451 11.316 22.08 15.269 29.794h18.19c1.834 0 3.537-.954 4.493-2.52s1.03-3.515.193-5.148l-.004.002z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ap-lg"></path><path d="M116.725 5.4H89.766l11.888 23.2h17.158c8.768.008 15.872 7.116 15.876 15.884s-7.095 15.882-15.863 15.897h-.885l10.513 20.517a38.07 38.07 0 0 0 8.898-4.129 38.65 38.65 0 0 0 18.007-32.694h0c-.001-21.343-17.29-38.652-38.634-38.677h-.002zM74.546 60.38H62.877l-.061-.047-26.347 51.923h26.033L77.699 82.31h5.2l2.659.034-11.01-21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-md"></path><path d="M94.478 82.462l-11.316-22.08h-8.613l11.012 21.964z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="ap-sm"></path></svg><span class="fs-5"><strong>ALGO</strong>PAY</span></button>'
  +
  '</div><div id ="firstdiv" style="display: none" class="modal fade">'
  + screen2 +

  '<div id="sendscreen" style="display: none"><div id="tablevis" class="modal-body" style="display: none"><h3 id="messagioHeadagio">Complete Transfer</h3><p id="messagio">Please sign & send transaction</p><div class="bd-callout my-0"><div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#4550e6">  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/><path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></rect></svg><strong class="me-auto">TXN Summary</strong><snoopy-small small><p id="date"></p></small></div><div class="snoopy-box-boxed"><strong>My Address:&nbsp</strong><p id="snoopy"></p></div><div class="snoopy-box-2"><div class="snoops"><div id="inputAmount" style="display:none"></div><div class="snoops-2"><h6 class="snoopy-6">Amount:</h6><p id="snoopy2"></p></div></div></div></div></div><div p="{0}"><div class="higher-header-container"></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><button id="algosend" type="button" class="w-100 py-2 mb-2 btn btn-primary rounded-4">Send Transaction</button><button type="button" class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" data-bs-dismiss="modal" id="div-close-3">Cancel</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></h3></div><div id="algoflex3" style="display:none" ><div p="{0}"><div class="higher-header-container"></div><div class="modal-body" id="sure" p="{4}" pb="{1}" mb="{3}"><h3 id="messagioHeadagio">Transaction Away!</h3><p id="messagio">Would you like to track your transaction?</p></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><div class="w-100 alert alert-primary d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg><div class="le-flash" my={3} variant="info"><div class="snoopy-box-4"><p class="text-progress">Check progress on</p><a id="algolink" class="algoexplorer"> AlgoExplorer</a></div></div></div></div><div></div></div></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div ></div></div><div class="footer primary"></div></div></div></div></div></div></div></div></div><svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></symbol></svg>';

var indexerURL = "https://indexer.algoexpolerapi.io/v2/accounts/";
const myAlgoWallet = Pipeline.init();

if (window.details !== undefined) {
  var index = parseInt(window.details.index);
  var amount = window.details.amount;
  var note = window.details.note;
  var recipient = window.details.recipient;
  var backend_enable = window.details.backend_enable;
  var backend_url = window.details.url_backend_url;
  var backend_value1 = window.details.backend_value1;
  var backend_value2 = window.details.backend_value2;
  var backend_value3 = window.details.backend_value3;
  var backend_value4 = window.details.backend_value4;
} else {
  window.details = {
    index: parseInt(137594422),
    amount: 0,
    note: "",
    recipient: "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4",
    input: true,
    backend_enable: false
  }
  var amount = window.details.amount;
  var index = window.details.index;
  var note = window.details.note;
  var recipient = "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4"; // Default address is set to HDL seed address. Please update recipient to your address before deploying.//
  var backend_enable = false;
  var backend_value1 = null;
  var backend_value2 = null;
  var backend_value3 = null;
  var backend_value4 = null;
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
      console.log("Error occured  " + url2);
    });
}

var iamount = 1000000

function getZeros() {
  if (index !== 0) {
    let url2 = "https://indexer.algoexplorerapi.io/v2/assets/" + index;
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
        iamount =  parseInt(value);
        if (window.details.input === true) { amount = amount * iamount }
        Object.assign(state, { stateAmount: amount / iamount });
        Object.assign(state, { assetName: data.asset.params["unit-name"] });
        document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

      })
      .catch(function () {
        console.log("Error occured  " + url2);
      });
  } else {
    if (window.details.input === true) { amount = amount * 1000000 }
    Object.assign(state, { stateAmount: amount / 1000000 });
    document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

  }
}

function convertInput() {
  if (index !== 0) {
        if (window.details.input === true) { amount = amount * iamount }
        Object.assign(state, { stateAmount: amount / iamount });
        document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;
  } else {
    if (window.details.input === true) { amount = amount * 1000000 }
    Object.assign(state, { stateAmount: amount / 1000000 });
    document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

  }
}

function close() {
  Object.assign({ isOpen: false });
  document.getElementById("firstdiv").style.display = "none";
  document.getElementById("firstdiv").className = "modal fade";
  document.getElementById("sure").style.display = "block";
  document.getElementById("shhh").style.display = "block";
  document.getElementById("tablevis").style.display = "none";
  document.getElementById("sendscreen").style.display = "none";
}

function connect() {
  Pipeline.connect(myAlgoWallet).then((data) => {
    Object.assign(state, { address: data });
    Object.assign(state, { con_status_text: "Connected" });
    Object.assign(state, { tableVis: true });
    getZeros();
    updateBalance();
    document.getElementById("sure").style.display = "none";
    document.getElementById("shhh").style.display = "none";
    document.getElementById("tablevis").style.display = "block";
    document.getElementById("sendscreen").style.display = "block";
    document.getElementById("snoopy").innerText = "" + state.address.slice(0, 20) + "...";
  });

}

function send() {
  if (Pipeline.pipeConnector === "WalletConnect") {
    alert("Close this alert, then sign the transaction in your offical Algorand wallet app.")
  }
  Pipeline.send(
    recipient,
    amount,
    note,
    state.address,
    myAlgoWallet,
    index
  ).then((data) => {
    if (data !== undefined) {
      Object.assign(state, { txID: data });
      document.getElementById("sendscreen").style.display = "none";
      document.getElementById("algoflex3").style.display = "block";
      document.getElementById("algolink").href = "https://algoexplorer.io/tx/" + state.txID;
    }
    else { alert("transaction cancelled") }
  });
}

function setOpen() {
  document.getElementById("firstdiv").style.display = "block";
  document.getElementById("firstdiv").className = "modal fade show";
}

function switchConnector(event) {
  Pipeline.pipeConnector = event.target.value
  console.log(Pipeline.pipeConnector)
}

document.getElementById("walletswitch").onchange = switchConnector


document.getElementById("algopay-btn").onclick = setOpen;
document.getElementById("div-close").onclick = close;
document.getElementById("div-close-2").onclick = close;
document.getElementById("div-close-3").onclick = close;
document.getElementById("algobutton").onclick = connect;
document.getElementById("algosend").onclick = send;

if (window.details.input !== false) {
  document.getElementById("inputAmount").innerHTML = '<input id="amountInputter" class="form-control" type="number" value="0"/>'
  document.getElementById("amountInputter").onchange = inputChanged
}

function inputChanged() {
  amount = document.getElementById("amountInputter").value;
  convertInput();

}
function showDate() {
  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  document.getElementById("date").innerText = m + "/" + d + "/" + y;
}

showDate();

if (window.details.input === true) {document.getElementById ("inputAmount").style.display = "block"}
