# public/

Files here are served as-is from the site root.

## Add your CV

The **Download CV** button in the hero links to `/cv.pdf`. Drop your resume file
here named exactly **`cv.pdf`**:

```
public/cv.pdf
```

No code change needed — the path is already wired in `src/data/site.ts`
(`cvPath`). If you name it differently, update `cvPath` there.
