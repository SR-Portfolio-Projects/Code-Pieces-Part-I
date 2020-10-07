import { useState } from 'react';
import { useHistory} from 'react-router-dom';

import dummyPieces from '../data'; 

export const usePieces = () => {
    const [ pieces, setPieces] = useState(dummyPieces);

    return [pieces, setPieces];

}
