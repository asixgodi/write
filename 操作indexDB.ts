// 单例模式
export class ChatStorageMessage {
    private static instance: ChatStorageMessage | null = null;
    private readonly dbName = 'chatMessagesDB'
    private readonly objectStorageName = 'chatRecords'
    private readonly chatRecordKey = 'chatRecordKey'
    private readonly isIndexedDBSupported: boolean = 'indexedDB' in window

    private constructor() {
        if (ChatStorageMessage.instance) {
            throw new Error('请使用getInstance来获取实例')
        }
    }
    public static getInstance(): ChatStorageMessage {
        if (!ChatStorageMessage.instance) {
            ChatStorageMessage.instance = new ChatStorageMessage()
        }
        return ChatStorageMessage.instance
    }
}