/* eslint-disable */

interface Promise<T> extends PromiseLike<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then(
    onfulfilled?: null | undefined,
    onrejected?: ((reason: unknown) => T | PromiseLike<T>) | null | undefined,
  ): Promise<T>;

  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<U>(
    onfulfilled: (value: T) => U | PromiseLike<U>,
    onrejected?: ((reason: unknown) => U | PromiseLike<U>) | null | undefined,
  ): Promise<U>;

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch(onrejected?: ((reason: unknown) => T | PromiseLike<T>) | null | undefined): Promise<T>;
}
