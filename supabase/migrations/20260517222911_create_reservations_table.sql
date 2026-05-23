/*
  # Create Reservations Table for La Tavola Seaview

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `phone` (text, customer phone)
      - `date` (date, reservation date)
      - `time` (text, reservation time slot)
      - `guests` (integer, number of guests)
      - `special_request` (text, optional special request)
      - `status` (text, pending/confirmed/cancelled)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `reservations` table
    - Allow anyone to insert (public booking form)
    - Only authenticated users (staff) can read/update/delete
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  special_request text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a reservation"
  ON reservations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated staff can view reservations"
  ON reservations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated staff can update reservations"
  ON reservations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
