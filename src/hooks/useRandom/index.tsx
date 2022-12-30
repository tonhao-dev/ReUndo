export function useRandom() {
  function generateBetweenInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return { generateBetweenInterval };
}
