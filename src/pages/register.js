import React from "react";
class Register extends React.Component {
    render() {
        return (
            <body>
                <h1>Register Here</h1>
                <form>
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" name="name" required></input>

                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required></input>

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>

                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required></input>

                    <label for="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required></input>

                    <label for="gender">Gender:</label>
                    <select id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                    </select>

                    <label for="address">Address:</label>
                    <textarea id="address" name="address" required></textarea>

                                        <label for="city">City:</label>
                                        <input type="text" id="city" name="city" required></input>

                                            <label for="state">State:</label>
                                            <input type="text" id="state" name="state" required></input>

                                                <label for="mobile-number">Mobile Number:</label>
                                                <input type="tel" id="mobile-number" name="mobile-number" required></input>

                                                    <input type="submit" value="Register"/>
                </form>
                </body>
                );
    }
}
export default Register;