const festivals = require('./festivalsScraper');

describe('Festivals', () => {
  test('Récupère les festivals', async () => {
    const festivalData = await festivals.getFestivals();
    expect(festivalData.length).toBeGreaterThan(0);
  });
});
