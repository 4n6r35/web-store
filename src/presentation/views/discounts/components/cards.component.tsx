import { ICard } from "../../../../domain/interface/card.interface";
import { useState, useEffect } from "react";
import '../styles/animation.css';
import { SurpriceIcon } from "../../../assets";

export const CardComponent = () => {
    const [cards, setCards] = useState<ICard[]>([
        { id: 1, value: "15%", flipped: false },
        { id: 2, value: "20%", flipped: false },
        { id: 3, value: "30%", flipped: false },
        { id: 4, value: "40%", flipped: false },
    ]);

    const [cardsShuffled, setCardsShuffled] = useState(false);
    const [cardFlipped, setCardFlipped] = useState<boolean>(false);

    useEffect(() => {
        if (!cardsShuffled) {
            const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
            setCards(shuffledCards);
            setCardsShuffled(true);
        }
    }, [cards, cardsShuffled]);

    const flipCard = (id: number) => {
        if (!cardFlipped) {
            const updatedCards = cards.map((card) =>
                card.id === id
                    ? { ...card, flipped: !card.flipped }
                    : card
            );
            setCards(updatedCards);

            const selectedCard = updatedCards.find((card) => card.id === id);
            if (selectedCard) {
                const valueWithoutPercentage = selectedCard.value.replace("%", "");
                localStorage.setItem("DiscountValue", valueWithoutPercentage);
            }

            setCardFlipped(true);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4 items-center justify-items-center justify-center lg:px-96 lg:py-14">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className={`h-48 w-48 card ${card.flipped ? "flipped" : ""}`}
                    onClick={() => flipCard(card.id)}
                >
                    <div className="card__content">
                        <div className="card__front text-8xl shadow__card">
                            <SurpriceIcon />
                        </div>
                        <div className="card__back shadow__card">
                            <h2 className="font-bold text-5xl">{card.value}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
