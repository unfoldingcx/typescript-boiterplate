/**
 * A TypeScript implementation of a StringBuilder, inspired by Java's StringBuilder.
 * Efficiently builds strings by appending values to an internal buffer.
 * Supports appending strings, numbers, booleans, and objects (coerced to strings).
 * 
 * @example
 * const sb = new StringBuilder();
 * sb.append('Hello').append(' ').append(42);
 * console.log(sb.toString()); // "Hello 42"
 */
class StringBuilder {
  private buffer: string[]

  /**
   * Constructs a new StringBuilder instance.
   * Optionally initializes with a starting string.
   * 
   * @param initialValue - Optional initial string value.
   */
  constructor(initialValue?: string) {
    this.buffer = initialValue ? [initialValue] : []
  }

  /**
   * Appends the string representation of the given value to this StringBuilder.
   * 
   * @param value - The value to append (string, number, boolean, or object).
   * @returns This StringBuilder instance for method chaining.
   */
  public append(value: any): this {
    this.buffer.push(String(value))
    return this
  }

  /**
   * Appends the specified string to this StringBuilder.
   * 
   * @param str - The string to append.
   * @returns This StringBuilder instance for method chaining.
   */
  public appendString(str: string): this {
    return this.append(str)
  }

  /**
   * Appends the string representation of the given number to this StringBuilder.
   * 
   * @param num - The number to append.
   * @returns This StringBuilder instance for method chaining.
   */
  public appendNumber(num: number): this {
    return this.append(num.toString())
  }

  /**
   * Appends the string representation of the given boolean to this StringBuilder.
   * 
   * @param bool - The boolean to append ("true" or "false").
   * @returns This StringBuilder instance for method chaining.
   */
  public appendBoolean(bool: boolean): this {
    return this.append(bool.toString())
  }

  /**
   * Inserts the string representation of the given value at the specified index.
   * 
   * @param index - The index at which to insert (0-based).
   * @param value - The value to insert.
   * @returns This StringBuilder instance for method chaining.
   * @throws Error if index is out of bounds.
   */
  public insert(index: number, value: any): this {
    if (index < 0 || index > this.buffer.length) {
      throw new Error('Index out of bounds')
    }
    this.buffer.splice(index, 0, String(value))
    return this
  }

  /**
   * Deletes characters from the specified start index to end index.
   * 
   * @param start - The starting index (inclusive).
   * @param end - The ending index (exclusive). If omitted, deletes to the end.
   * @returns This StringBuilder instance for method chaining.
   * @throws Error if indices are out of bounds.
   */
  public delete(start: number, end?: number): this {
    const actualEnd = end ?? this.buffer.length
    if (start < 0 || start > this.buffer.length || actualEnd < start || actualEnd > this.buffer.length) {
      throw new Error('Indices out of bounds')
    }
    this.buffer.splice(start, actualEnd - start)
    return this
  }

  /**
   * Reverses the character sequence in this StringBuilder.
   * 
   * @returns This StringBuilder instance for method chaining.
   */
  public reverse(): this {
    this.buffer = this.buffer.reverse()
    return this
  }

  /**
   * Returns the length of the string built so far.
   * 
   * @returns The number of characters.
   */
  public get length(): number {
    return this.buffer.join('').length
  }

  /**
   * Converts the StringBuilder to a single string.
   * 
   * @returns The concatenated string.
   */
  public toString(): string {
    return this.buffer.join('')
  }

  /**
   * Clears the buffer, resetting the StringBuilder to empty.
   * 
   * @returns This StringBuilder instance for method chaining.
   */
  public clear(): this {
    this.buffer = []
    return this
  }
}

export { StringBuilder as default }