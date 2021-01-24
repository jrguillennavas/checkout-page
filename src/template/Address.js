const Address = () => {
  const template = `
                        <div class="address">
                            <h2 class="address__title">Shipping address</h2>
                            <label for="name">
                                Full name
                                <i class="material-icons" id="add2">account_circle</i>
                                <input type="text" name="name" id="name" required placeholder="Full name..">
                            </label>
                            <label for="address">
                                Address
                                <i class="material-icons" id="add2">home</i>
                                <input type="text" name="address" id="address" required placeholder="Your address..">
                            </label>
                            <label for="city">
                                City
                                <i class="material-icons" id="add2">location_city</i>
                                <input type="text" name="city" id="city" required placeholder="Your city..">
                            </label>
                            <div class="address__country-post">
                                <label for="country" class="address--country-post">
                                    Country
                                    <i class="material-icons" id="add2">public</i>
                                    <input type="text" name="country" id="cicountryty" required placeholder="Your country..">
                                </label>
                                <label for="postal" class="address--country-post">
                                    Postal code
                                    <i class="material-icons" id="add2">markunread_mailbox</i>
                                    <input type="text" name="postal" id="postal" required placeholder="Your postal code..">
                                </label>
                            </div>
                        </div>
                     `;
  return template;
};

export default Address;
