import photo1 from "../assets/static/photo1.png";
import photo2 from "../assets/static/photo2.png";
const Shipping = () => {
  const template = `
                    <section class="shipping">
                        <div class="shipping__item">
                            <img src="${photo1}" alt="Image of product" Class="shipping__photo-item">
                            <div class="shipping__description">
                                <h2 class="shipping__title">Vintage Backbag</h2>
                                <div class="shipping__detail">
                                    <span class="shipping__price" id="price1">$54.99</span>
                                    <span class="shipping__discount"> <del>$94.99</del></span>
                                </div>
                                <div class="shipping__quantity">
                                    <i class="material-icons shipping__quantity--content" id="add1">add</i>
                                    <span class="shipping__count" id="count1">1</span>
                                    <i class="material-icons shipping__quantity--content" id="less1">remove</i>
                                </div>
                            </div>
                        </div>
                        <div class="shipping__item">
                            <img src="${photo2}" alt="Image of product" Class="shipping__photo-item">
                            <div class="shipping__description">
                                <h2 class="shipping__title">Levi Shoes</h2>
                                <div class="shipping__detail">
                                    <span class="shipping__price">$74.99</span>
                                    <span class="shipping__discount"><del>$124.99</del></span>
                                </div>
                                <div class="shipping__quantity">
                                    <i class="material-icons shipping__quantity--content" id="add2">add</i>
                                    <span class="shipping__count" id="count2">1</span>
                                    <i class="material-icons shipping__quantity--content" id="less2">remove</i>
                                </div>
                            </div>
                        </div>
                        <div class="shipping__total">
                            <div class="shipping__total-content">
                                <h2 class="shipping__total-title">Shipping</h2>
                                <p class="shipping__total-tax">$19</p>
                            </div>
                            <div class="shipping__total-content">
                                <h2 class="shipping__total-title">Total</h2>
                                <p class="shipping__total-tax" id="total">$148.98</p>
                            </div>
                        </div>

                    </section>
     `;
  return template;
};

export default Shipping;
