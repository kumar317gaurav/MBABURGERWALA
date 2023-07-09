import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"skijs 12-32s wdnk"}
                </p>
            </div>

            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"14-10-2022"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"19-10-2022"}
                </p>
            </div>

            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Refrence</b>#{"14-10-2022"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"14-10-2022"}
                </p>
            </div>
            
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>₹{1220}
                </p>
                <p>
                    <b>Shipping Charges</b>₹{100}
                </p>
                <p>
                    <b>Tax</b>₹{132}
                </p>
                <p>
                    <b>Items Total</b>₹{1220+100+132}
                </p>
            </div>

            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{5}</span> x <span>{200}</span>
                    </div>
                </div>
                <div>
                    <h4>Veg Cheese Burger</h4>
                    <div>
                        <span>{3}</span> x <span>{200}</span>
                    </div>
                </div>
                <div>
                    <h4>Burger with Fries</h4>
                    <div>
                        <span>{3}</span> x <span>{200}</span>
                    </div>
                </div>
                <div>
                    <h4
                    style={{
                        fontWeight:800,
                    }}
                    >Sub Total
                    </h4>
                    <div
                    style={{
                        fontWeight:800,
                    }}>₹{2123}</div>
                </div>
            </article>
        </main>
    </section>
  )
}

export default OrderDetails