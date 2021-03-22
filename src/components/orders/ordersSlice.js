import { createSlice } from '@reduxjs/toolkit'


const initialState = [
  {
    orderNumber: '123456',
    orderItem: 'Ipad',
    orderItemImage:'../../images/ipad.png',
    status: 'Deliverd',
    total: '$1770.00',
    date: "02/01/201",
    title: 'Order Details',
    shippingAddress: 'xyz, state, zipcode',
    billingAddress: 'xyz, state, zipcode',
    paymentMethod: 'Credit card ending with xxx-897'
  },
  {
    orderNumber: '234556',
    orderItem: 'Macbook Pro',
    orderItemImage:'../../images/ipad.png',
    status: 'Deliverd',
    total: '$1870.00',
    date: "03/12/2020",
    title: 'Order Details',
    shippingAddress: 'xyz, state, zipcode',
    billingAddress: 'xyz, state, zipcode',
    paymentMethod: 'Credit card ending with xxx-897'
  },
  {
    orderNumber: '345667',
    orderItem: 'Go pro',
    orderItemImage:'../../images/ipad.png',
    status: 'Deliverd',
    total: '$6770.00',
    date: "01/10/2020",
    title: 'Order Details',
    shippingAddress: 'xyz, state, zipcode',
    billingAddress: 'xyz, state, zipcode',
    paymentMethod: 'Credit card ending with xxx-897'

  },
]

const postsSlice = createSlice({
  name: 'postss',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(total, orderNumber, status,date,title,shippingAddress,billingAddress,paymentMethod,orderItem,orderItemImage) {
        return {
          payload: {
            orderNumber,
            date,
            status,
            total,
            title,
            shippingAddress,
            billingAddress,
            paymentMethod,
            orderItem,
            orderItemImage
          },
        }
      },
    },
    postUpdated(state, action) {
      const { orderNumber,total,status,date,title,shippingAddress,billingAddress,paymentMethod,orderItem,orderItemImage } = action.payload
      const existingPost = state.find((post) => post.orderNumber === orderNumber)
      if (existingPost) {
        existingPost.orderNumber=orderNumber
        existingPost.date=date
        existingPost.status=status
        existingPost.total = total
        existingPost.title= title
        existingPost.shippingAddress= shippingAddress
        existingPost.billingAddress=billingAddress
        existingPost.paymentMethod=paymentMethod
        existingPost.orderItem=orderItem
        existingPost.orderItemImage=orderItemImage
      }
    },
  },
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
