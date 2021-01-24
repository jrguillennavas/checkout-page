import Shipping from "../template/Shipping.js";
import Information from "../template/Information.js";
import Address from "../template/Address.js";
const App = () => {
  const template = `
                        <header class="header">
                                <h1 class="header__title">Checkout</h1>
                        </header>
                        ${Shipping()}
                        <form action="" class="infoaddress" id="send-form">
                            ${Information()}
                            ${Address()}

                            <label for="save" class="infoaddress__saved">
                                <input  type="checkbox" name="save" id="save" >
                                Save this information for next time
                            </label>
                            <p class="infoaddress__message" id="message" >data sent...</p>
                            <input type="submit" value="Continue" class="btn-send" id="btn">
                        </form> 
                        <footer>
                            <h2 class="info">José R Guillen @ DevChallenge.io</h2>
                        </footer>   
                     `;
  return template;
};

export default App;
