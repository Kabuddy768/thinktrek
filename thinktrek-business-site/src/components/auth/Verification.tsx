import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { type AppDispatch, type RootState } from '../../store/store';
import { verifyEmail, clearError } from '../../store/slices/authSlice';
import toast from 'react-hot-toast';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, error, registrationEmail } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!registrationEmail) {
      toast.error('Please register first');
      navigate('/register');
    }
  }, [registrationEmail, navigate]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!registrationEmail) return;

    if (verificationCode.length !== 6) {
      toast.error('Verification code must be 6 digits');
      return;
    }

    const result = await dispatch(
      verifyEmail({ email: registrationEmail, verificationCode })
    );

    if (verifyEmail.fulfilled.match(result)) {
      toast.success('Email verified successfully! You can now login.');
      navigate('/login');
    } else {
      toast.error(error || 'Verification failed. Please check your code.');
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg transform hover:scale-105 transition-transform">
            <FaEnvelope className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Check Your Email
          </h1>
          <p className="text-gray-600">We've sent a verification code to your inbox</p>
        </div>

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/50">
          {/* Email Info */}
          <div className="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-blue-800 mb-1">Verification code sent!</p>
                <p className="text-blue-700">
                  Check your inbox at <span className="font-semibold">{registrationEmail}</span>
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6">
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Verification Code Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={handleCodeChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-center text-3xl font-mono tracking-widest focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all"
                placeholder="000000"
                maxLength={6}
                required
              />
              <p className="text-xs text-gray-500 mt-2 text-center">
                Enter the 6-digit code from your email
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || verificationCode.length !== 6}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Verifying...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <FaCheckCircle />
                  Verify Email
                </span>
              )}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 font-medium mb-2">Didn't receive the code?</p>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                Check your spam/junk folder
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                Wait a few minutes and try again
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                Make sure you entered the correct email
              </li>
            </ul>
          </div>

          {/* Back to Register */}
          <div className="text-center mt-6">
            <Link
              to="/register"
              className="text-purple-600 hover:text-pink-600 font-semibold transition-colors"
            >
              ← Back to Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;