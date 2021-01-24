const Information = () => {
  const template = `
                        <div class="information">
                            <h2 class="information__title">Contact infomation</h2>
                            <label for="email">
                                E-mail
                                <i class="material-icons" id="add2">mail</i>
                                <input type="email" name="email" id="email" required placeholder="Enter your email...">
                            </label>
                            <label for="tel">
                                Phone
                                <i class="material-icons" id="add2">phone</i>
                                <input type="tel" name="tel" id="tel" required placeholder="Enter your phone...">
                            </label>
                        </div>
                     `;

  return template;
};

export default Information;
