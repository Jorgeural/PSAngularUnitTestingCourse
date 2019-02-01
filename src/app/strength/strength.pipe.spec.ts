import { StrengthPipe } from './strength.pipe';

describe('StrengthPipeDirective', () => {
  it('should display weak if the strength is 5', () => {
    // Arrange
    let pipe = new StrengthPipe();

    // Act
    let val = pipe.transform(5);

    // Assert
    expect(val).toEqual('5 (weak)');
  });

  it('should display strong if the strength is 10', () => {
    // Arrange
    let pipe = new StrengthPipe();

    // Act
    let val = pipe.transform(10);

    // Assert
    expect(val).toEqual('10 (strong)');
  });

  it('should display strong if the unbelievable is 20', () => {
    // Arrange
    let pipe = new StrengthPipe();

    // Act
    let val = pipe.transform(20);

    // Assert
    expect(val).toEqual('20 (unbelievable)');
  });
});
