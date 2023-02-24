export enum MysqlErrorCode {
  UniqueViolation = 'ER_DUP_ENTRY',
  MissingColumn = 'ER_BAD_FIELD_ERROR',
  MissingForeignKey = 'ER_NO_REFERENCED_ROW_2',
  MissingTable = 'ER_NO_SUCH_TABLE',
}
