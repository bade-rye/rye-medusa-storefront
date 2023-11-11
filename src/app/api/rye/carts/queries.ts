import { gql } from "@urql/core"

export const GET_CART_BY_ID = gql`
  query ($id: ID!) {
    checkoutByCartID(cartID: $id) {
      cart {
        id
        stores {
          ... on AmazonStore {
            errors {
              code
              message
              details {
                productIds
              }
            }
            isSubmitted
            store
            cartLines {
              quantity
              product {
                id
              }
            }
            offer {
              errors {
                code
                message
                details {
                  ... on AmazonOfferErrorDetails {
                    productIds
                  }
                }
              }
              subtotal {
                value
                displayValue
                currency
              }
              margin {
                value
                displayValue
                currency
              }
              notAvailableIds
              shippingMethods {
                id
                label
                price {
                  value
                  displayValue
                  currency
                }
                taxes {
                  value
                  displayValue
                  currency
                }
                total {
                  value
                  displayValue
                  currency
                }
              }
            }
          }
          ... on ShopifyStore {
            errors {
              code
              message
              details {
                variantIds
              }
            }
            isSubmitted
            store
            cartLines {
              quantity
              variant {
                id
              }
            }
            offer {
              errors {
                code
                message
                details {
                  ... on ShopifyOfferErrorDetails {
                    variantIds
                  }
                }
              }
              subtotal {
                value
                displayValue
                currency
              }
              margin {
                value
                displayValue
                currency
              }
              notAvailableIds
              shippingMethods {
                id
                label
                price {
                  value
                  displayValue
                  currency
                }
                taxes {
                  value
                  displayValue
                  currency
                }
                total {
                  value
                  displayValue
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`
export const CREATE_RYE_CART = gql`
  mutation ($input: CartCreateInput!) {
    createCart(input: $input) {
      cart {
        id
        cost {
          subtotal {
            value
            displayValue
          }
          tax {
            value
            displayValue
          }
          shipping {
            value
            displayValue
          }
          total {
            value
            displayValue
          }
        }
        buyerIdentity {
          firstName
          lastName
          address1
          address2
          city
          provinceCode
          countryCode
          postalCode
          email
          phone
        }
        stores {
          ... on AmazonStore {
            errors {
              code
              message
              details {
                productIds
              }
            }
            isSubmitted
            store
            cartLines {
              quantity
              product {
                id
              }
            }
            offer {
              errors {
                code
                message
                details {
                  ... on AmazonOfferErrorDetails {
                    productIds
                  }
                }
              }
              subtotal {
                value
                displayValue
                currency
              }
              margin {
                value
                displayValue
                currency
              }
              notAvailableIds
              shippingMethods {
                id
                label
                price {
                  value
                  displayValue
                  currency
                }
                taxes {
                  value
                  displayValue
                  currency
                }
                total {
                  value
                  displayValue
                  currency
                }
              }
            }
          }
          ... on ShopifyStore {
            errors {
              code
              message
              details {
                variantIds
              }
            }
            isSubmitted
            store
            cartLines {
              quantity
              variant {
                id
              }
            }
            offer {
              errors {
                code
                message
                details {
                  ... on ShopifyOfferErrorDetails {
                    variantIds
                  }
                }
              }
              subtotal {
                value
                displayValue
                currency
              }
              margin {
                value
                displayValue
                currency
              }
              notAvailableIds
              shippingMethods {
                id
                label
                price {
                  value
                  displayValue
                  currency
                }
                taxes {
                  value
                  displayValue
                  currency
                }
                total {
                  value
                  displayValue
                  currency
                }
              }
            }
          }
        }
      }
      errors {
        code
        message
      }
    }
  }
`

export const UPDATE_BUYER_IDENTITY = gql`
  mutation ($input: CartBuyerIdentityUpdateInput!) {
    updateCartBuyerIdentity(input: $input) {
      cart {
        id
        buyerIdentity {
          firstName
          lastName
          address1
          address2
          city
          provinceCode
          countryCode
          postalCode
          email
          phone
        }
        stores {
          ... on AmazonStore {
            errors {
              code
              message
              details {
                productIds
              }
            }
            store
            cartLines {
              quantity
              product {
                id
              }
            }
            offer {
              errors {
                code
                message
                details {
                  ... on AmazonOfferErrorDetails {
                    productIds
                  }
                }
              }
              subtotal {
                value
                displayValue
                currency
              }
              margin {
                value
                displayValue
                currency
              }
              notAvailableIds
              shippingMethods {
                id
                label
                price {
                  value
                  displayValue
                  currency
                }
                taxes {
                  value
                  displayValue
                  currency
                }
                total {
                  value
                  displayValue
                  currency
                }
              }
            }
          }
          ... on ShopifyStore {
            errors {
              code
              message
              details {
                variantIds
              }
            }
            store
            cartLines {
              quantity
              variant {
                id
              }
            }
            offer {
              errors {
                code
                message
                details {
                  ... on ShopifyOfferErrorDetails {
                    variantIds
                  }
                }
              }
              subtotal {
                value
                displayValue
                currency
              }
              margin {
                value
                displayValue
                currency
              }
              notAvailableIds
              shippingMethods {
                id
                label
                price {
                  value
                  displayValue
                  currency
                }
                taxes {
                  value
                  displayValue
                  currency
                }
                total {
                  value
                  displayValue
                  currency
                }
              }
            }
          }
        }
      }
      errors {
        code
        message
      }
    }
  }
`
