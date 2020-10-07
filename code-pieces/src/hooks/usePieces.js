import { useState } from 'react';
import { useHistory} from 'react-router-dom';

import dummyPieces from '../data'; 

export const usePieces = () => {
    const [ pieces, setPieces] = useState(dummyPieces);

    const history = useHistory()

    const handleCreate = piece => {
      setPieces([...pieces, piece])
      setTimeout(() => {
          history.push('/');
        }, 100);
    };

    return [pieces, setPieces, handleCreate];


}
