import { useCallback, useState } from "react";
import { deleteCard, getCards, getMyCards } from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackBarProvider";

export default function useCards() {
  const [cards, setCards] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnack();

  const handleGetCards = useCallback( async () => {
    try {
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All the cards are here");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  },[]);

  const handleGetMyCards=useCallback( async () => {
    try {
      const cards = await getMyCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All your cards are here");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  },[]);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);


  return {
    cards,
    isLoading,
    error,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard
  };
}
