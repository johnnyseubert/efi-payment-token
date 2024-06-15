/* eslint-disable no-undef */
try {
   EfiJs.CreditCard
     .setCardNumber('4485785674290087')
     .verifyCardBrand()
     .then(brand => {
         console.log('Bandeira: ', brand);

         if (brand !== 'undefined') {
             // Exemplo: executar a função para gerar o payment_token com a bandeira identificada
         }
     }).catch(err => {
         console.log('Código: ', err.code);
         console.log('Nome: ', err.error);
         console.log('Mensagem: ', err.error_description);
     });
} catch (error) {
 console.log('Código: ', error.code);
 console.log('Nome: ', error.error);
 console.log('Mensagem: ', error.error_description);
}