import axios from 'axios';
import { getWeatherService } from '../src/utils/services';
import dummyWeatherData from '../data/dummyWeatherData.json'

vi.mock(`axios`);

describe("getWeatherService tests", () => {
        it("should make the external data call", async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: dummyWeatherData });
            const location = 'london';
            // Act
            await getWeatherService(location);
            // Assert
            expect(axios.get).toHaveBeenCalledWith(
                `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=90d9cb7748e3233b66c21f772bd65445`
            );
        });
});