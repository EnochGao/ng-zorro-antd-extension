import { Observable, fromEvent, map, take } from 'rxjs';

/**选择文件*/
export function selectFile(
  accept?: string,
  multiple?: false
): Observable<File | null>;

export function selectFile(
  accept?: string,
  multiple?: true
): Observable<FileList | null>;

export function selectFile(
  accept: string = '*',
  multiple = false
): Observable<FileList | File | null> {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.multiple = multiple;
  input.click();
  input.remove();
  return fromEvent(input, 'change')
    .pipe(take(1))
    .pipe(
      map((e) => {
        if (input?.files) {
          if (input?.files.length) {
            if (multiple) {
              return input?.files;
            } else {
              return input.files[0];
            }
          }
        }
        return null;
      })
    );
}

/**文件下载*/
export function downloadFile(file: Blob, fileName: string = '') {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = fileName;
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}
