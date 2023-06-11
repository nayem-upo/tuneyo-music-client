import React, { useContext } from 'react';
import { AuthContext } from '../Authenticate/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSelectedCard = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://tuneyo-server.vercel.app/selectedclasses?email=${user?.email}`);
            return response.json();
        },
    });
    return [selectedClasses, refetch];
};


export default useSelectedCard;