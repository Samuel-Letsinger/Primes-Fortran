module DualPrimes
  implicit none

contains

  function findPrimes(N, g) result(primes)
    real, intent(in) :: N, g
    real :: prev1, prev2, current, ans
    real :: primes(2)
    integer :: r

    r = 1
    do
      ans = modulo((g ** r), N)
      if (ans == 1) exit
      r = r + 1
    end do

    prev1 = (g ** (r / 2)) + 1
    prev2 = N
    ! Euclids Algorithm to find prime #1
    do
      current = modulo(prev1, prev2)
      if (current == 0) exit
      prev1 = prev2
      prev2 = current
    end do

    primes(1) = prev2
    ! Simple math to find prime #2
    primes(2) = N / primes(1)

  end function findPrimes

end module DualPrimes

program Main
    use DualPrimes
    real :: N, g
    real :: p(2)

    N = 77.0
    g = 8.0

    p = findPrimes(N, g)

    if (p(1) * p(2) == N) then
        print*, "p =", p(1), " * q =", p(2), " = ", N
    else
        print*, "Error: Unknown"
        stop
    end if

end program Main

! N = p * q
! N = 77
! g = 8
! g^r = mN + 1
! g^r - 1 = mN
! (g^(r/2)+1)(g^(r/2)-1) = mN
! g % N = 44
! N % 44 = 33
! 44 % 33 = 11
! 33 % 11 = 3 R 0
! p = (g^(r/2)+1) = 11
! q = N / p = 7
! N = p * q = 11 * 7 = 77
