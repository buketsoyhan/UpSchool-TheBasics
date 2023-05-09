using Application.Common.Helpers;

namespace Application.UnitTests.Common.Helpers
{
    public class MathHelperTests
    {
        [Fact]
        public void IsEven_Returns_True()
        {
            // Arrange
            var mathHelper = new MathHelper();

            int evenNumber = 6;
            int secondEvenNumber = 82;

            // Act
            var result = mathHelper.IsEven(evenNumber);

            var secondResult = mathHelper.IsEven(secondEvenNumber);

            // Assert
            Assert.True(result);

            Assert.True(secondResult);

            Assert.NotNull(result);

        }

        [Fact]
        public void IsEven_Returns_False()
        {
            // Arrange
            var mathHelper = new MathHelper();

            // Serenay <3
            int oddNumber = 1;
            int SecondOddNumber = 11;

            // Act
            var result = mathHelper.IsEven(oddNumber);

            var secondResult = mathHelper.IsEven(SecondOddNumber);

            // Assert
            Assert.False(result);

            Assert.False(secondResult);

            Assert.NotNull(result);

        }

        [Fact]
        public void Add_Returns_True()
        {
            // Arrange
            var mathHelper = new MathHelper();

            int firstNumber = 13;
            int SecondOddNumber = 21;

            // Act
            var result = mathHelper.Add(firstNumber, SecondOddNumber);

            // Assert
            Assert.Equal(34, result);

            Assert.NotEqual(5, result);

            Assert.InRange(result, 0, 36);

            Assert.InRange(result, -1000, 5);
        }
    }
}