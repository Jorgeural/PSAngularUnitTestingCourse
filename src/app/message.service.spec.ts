import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no messages to start', () => {
    // Arrage

    // Act
    let length = service.messages.length;
    // Assert
    expect(length).toBe(0);
  });

  it('should add a message when add() is called', () => {
    // Arrage
    service.add('message1');
    // Act
    let length = service.messages.length;
    // Assert
    expect(length).toBe(1);
  });

  it('should remove all messages when clear() is called', () => {
    // Arrage
    service.add('message1');
    // Act
    service.clear();
    let length = service.messages.length;
    // Assert
    expect(length).toBe(0);
  });
});
