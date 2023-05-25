export type Promo = {
  authRequired: boolean
  /** Any image URL consumed to next/image */
  image: string
  title: string
  /** Any Date()-parsable string with date */
  addDate: string
  expireDate: string
  description: string
  rate: 0 | 1 | 2 | 3 | 4 | 5
  /** Human-friendly short description of sale */
  sale: string
  code: string
}