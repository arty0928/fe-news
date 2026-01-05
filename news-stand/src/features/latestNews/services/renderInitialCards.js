import { createLatestNewsCard } from '../components/LatestNewsCard.js';

/**
 * 초기 카드 렌더링
 */
export function renderInitialCards(initialNews) {
  const container = document.getElementById('news-container');

  if (!container) {
    console.error('news-container를 찾을 수 없습니다');
    return;
  }

  const cardsWrapper = document.createElement('div');
  cardsWrapper.className = 'cards-wrapper';

  const card1 = createLatestNewsCard(1, initialNews[0]);
  const card2 = createLatestNewsCard(2, initialNews[1]);

  cardsWrapper.appendChild(card1);
  cardsWrapper.appendChild(card2);
  container.appendChild(cardsWrapper);
}
