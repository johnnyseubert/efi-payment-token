import { useState } from 'react';
import { getPaymentToken } from './efi/functions';

export default function App() {
   const [cardNumber, setCardNumber] = useState('');
   const [generating, setGenerating] = useState(false);

   const handleShowBrand = async () => {
      // getCardBrand(cardNumber).then((brand) => {
      //    alert(`A brand é ${brand}`);
      // }).then(() => {
      setGenerating(true);
      await getPaymentToken().then(() => {
         setGenerating(false);
      });
   };

   return (
      <div>
         <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
         />

         <button onClick={handleShowBrand}>
            {generating ? 'Gerando...' : 'Gerar'}
         </button>
      </div>
   );
}
