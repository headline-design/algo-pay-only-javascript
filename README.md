# algo-pay-only-javascript
Work in progress project to port AlgoPay react to pure javascript

build command (to dist folder, will create if does not exist):

```bash
npm run build
```

to correctly show css after bulding, modify the index.html that is generated in the dist folder by:

- removing one of the `<link>` tags for the css
- removing the numeric hash from the remaining `<link>`tag so that the href reads "styles.css"
- renaming the js file to "index.js"
- renaming the `<script>` tag src to "index.js"

Finally, copy your styles.css file into the dist folder.

test build command on localhost:

```serve dist
```

Algopay 2.1 Update: Add Post to custom URL
(temp documentation for post)

in window details, add "backend_enable":false
Script will work like always.

In window details, add "backend_enable":true,backend_url":"your_backend_url",backend_value1=your_value...."
TXID and custom parameters will be sent by post to chosen URL

Example using pseudoPHP:

//Get the POST data
$update = json_decode(file_get_contents("php://input"), TRUE);
//Get the TXID
$txid = $update["txid"];
//Get value 1, lets say we send customer email
$email = $update["backend_value1"];

//Wait block for being processed
sleep(5);

//Get the TX from algoexplorer
$api_url = "https://algoexplorerapi.io/v2/transactions/pending/".$txid."";
$json_data = file_get_contents($api_url);
$response_data = json_decode($json_data, true);

//There are several ways to do this (nonce, check only latest blocks) but this time we will check if transfer is not being reused
//Define receiver account and price
$account = "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4"
$price = 20000
//Look in database if TXID is being reinjected to disallow reusing payments
$sql = "SELECT * FROM payments WHERE txid =".$txid."";
$result = $conn->query($sql);
//If payment is being reused, exit. Client trying to hack.
if (!empty($result)) { exit(); }

//If the paid amount is correct and the receiver address is correct and the product is still on sale process it
if ($response_data["txn"]["txn"]["aamt"] == $price) {
if ($response_data["txn"]["txn"]["arcv"] == $account) {
if ($on_sale == 1) {
//Mark product as sold, and save TxId to avoid future reuse
$sql = "UPDATE payments set on_sale = 0, txid = $txid, email = $email WHERE id = $id;
$conn->query($sql);
//DO ACTIONS, for example, sending a confirmation email
require 'PHPMailer/src/PHPMailer.php';
(...)
$mail->addAddress($email)
$mail->send();
}}

**THIS IS NOT A COMPLETE INTEGRATION, BUT ITS VALID ESPECIALLY FOR INEXHAUSTIBLE PRODUCTS (Like API keys or replaceable physical products) ****
Not fully tested, make your own test!
