/* eslint-disable no-undef */

export const getCardBrand = async (cardNumber) => {
   try {
      const onlyNumbers = cardNumber.toString().replace(/\D/g, '');

      const brand = await EfiJs.CreditCard.setCardNumber(
         onlyNumbers
      ).verifyCardBrand();
      console.log('Bandeira: ', brand);
      return brand;
   } catch (error) {
      console.log('Erro ao identificar a bandeira do cartão: ', error);
      return 'error';
   }
};

export const getPaymentToken = async () => {
   try {
      const result = await EfiJs.CreditCard.setAccount(
         '024b8cf781d127a5ae55faf7d06d565a'
      )
         .setEnvironment('sandbox') // 'production' or 'sandbox'
         .setCreditCardData({
            brand: 'mastercard',
            number: '4485785674290087',
            cvv: '123',
            expirationMonth: '05',
            expirationYear: '2029',
            reuse: true,
         }).getPaymentToken();
      const payment_token = result.payment_token;
      const card_mask = result.card_mask;

      console.log('payment_token', payment_token);
      console.log('card_mask', card_mask);
   } catch (error) {
      console.log('Código: ', error.code);
      console.log('Nome: ', error.error);
      console.log('Mensagem: ', error.error_description);
   }
};
